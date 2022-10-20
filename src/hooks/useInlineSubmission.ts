import { useState, useEffect, useCallback } from "react";

export type TStatus = "blank" | "loading" | "success" | "failed";

function debounce(this: any, func: any, timeout = 300) {
  let timer: string | number | NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    // console.log("debouce func, timeout value: ", timeout);
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const useInlineSubmission = (
  url: string,
  name: string,
  oldState: string,
  validationFunction: Function
) => {
  const [status, setStatus] = useState<TStatus>("blank");
  const [state, setState] = useState<string>(oldState);
  const [msg, setMsg] = useState<{ text: string; type: "error" | "success" }>({
    text: "",
    type: "success",
  });

  const handleRequest = useCallback(async () => {
    let result;
    try {
      setMsg((msg) => ({ ...msg, text: "" }));
      if (!validationFunction(state)) {
        result = await fetch(url, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ [name]: state }),
        });

        if (result.ok) {
          setStatus("success");
          setMsg({ type: "success", text: name + " updated" });
          setTimeout(() => {
            setMsg((msg) => ({ ...msg, text: "" }));
          }, 1500);
          return;
        } else {
          setStatus("failed");
          setMsg({ type: "error", text: "update failed" });
          return;
        }
      } else setMsg({ type: "error", text: validationFunction(state) });
    } catch (e) {
      setStatus("failed");
      console.error(e);
      setMsg((await result?.json()).msg || "something went wrong");
      return;
    }
  }, [name, state, url, validationFunction]);

  useEffect(() => {
    if (state !== oldState) {
      setStatus("loading");
      debounce(handleRequest(), 750);
    }
  }, [url, name, state, oldState, handleRequest]);

  return {
    status,
    value: state,
    toggleBlank: () => setStatus("blank"),
    onChange: setState,
    msg,
  };
};
