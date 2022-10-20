import React, { useCallback, useEffect, useState } from "react";
import { INote } from "../dtos/Note.dto";
import IconBtn from "../IconBtn";
import {
  Overlay,
  StyledForm,
  StyledMsg,
  StyledTextArea,
  StyledTextbox,
} from "../NewNote/NewNote";

interface IProps {
  handler: Function;
  titles: string[];
  note: INote;
}

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

function UpdateNote({ handler, titles, note }: IProps) {
  const [title, setTitle] = useState<string>(note.title);
  const [body, setBody] = useState<string>(note.body);
  const [msg, setMsg] = useState<{ text: string; type: "error" | "success" }>({
    text: "",
    type: "success",
  });

  const resetMsg = () => setMsg((msg) => ({ ...msg, text: "" }));

  const validateTitle = useCallback(() => {
    if (!title)
      return setMsg({
        text: "title cannot be empty",
        type: "error",
      });
    if (titles.includes(title))
      return setMsg({
        text: "title has been used already",
        type: "error",
      });
  }, [title, titles]);

  const validateody = useCallback(() => {
    if (!body)
      return setMsg({
        text: "body cannot be empty",
        type: "error",
      });
  }, [body]);

  const handleSubmit = useCallback(
    async ({ title, body }: { title?: string; body?: string }) => {
      let res: any;
      if (title) validateTitle();
      if (body) validateody();
      try {
        if (msg.text) return;
        res = await fetch("http://localhost:5000/notes/" + note._id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...(title && { title }),
            ...(body && { body }),
          }),
        });
        if (res.ok) {
          setMsg({
            text: (title ? "Title" : body ? "Body" : "") + "updated",
            type: "success",
          });
          setTimeout(resetMsg, 1000);
        } else
          setMsg({
            text: (await res.json())?.msg || "Note failed to update",
            type: "error",
          });
        return;
      } catch (error) {
        console.log(error);
      }
    },
    [msg.text, note._id, validateTitle, validateody]
  );

  useEffect(() => {
    if (title !== note.title) debounce(handleSubmit({ title: title }), 750);
  }, [title, handleSubmit, note.title]);

  useEffect(() => {
    if (body !== note.body) debounce(handleSubmit({ body: body }), 750);
  }, [body, handleSubmit, note.body]);

  return (
    <Overlay>
      <StyledForm>
        <IconBtn icon="arrow_back" handler={handler} />
        <h2>Update Note</h2>
        {msg.text && <StyledMsg type={msg.type}>{msg.text}</StyledMsg>}
        <StyledTextbox
          type="text"
          placeholder="Type title here ..."
          required
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            e.target.value !== title && resetMsg();
            setTitle(e.target.value);
          }}
        />
        <StyledTextArea
          placeholder="Type your note here ..."
          required
          name="body"
          id="body"
          value={body}
          onChange={(e) => {
            e.target.value !== body && resetMsg();
            setBody(e.target.value);
          }}
        />
      </StyledForm>
    </Overlay>
  );
}

export default UpdateNote;
