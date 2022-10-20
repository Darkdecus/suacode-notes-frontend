import React, { useState } from "react";
import IconBtn from "../IconBtn";
import {
  Overlay,
  StyledForm,
  StyledMsg,
  StyledSubmitBtn,
  StyledTextArea,
  StyledTextbox,
} from "./NewNote";

interface IProps {
  handler: Function;
}

function NewNote({ handler }: IProps) {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [msg, setMsg] = useState<{ text: string; type: "error" | "success" }>({
    text: "",
    type: "success",
  });

  const validation = () => {
    if (!title)
      return setMsg({
        text: "title is a required field",
        type: "error",
      });
    if (!body)
      return setMsg({
        text: "body is a required field",
        type: "error",
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res: any;
    validation();
    try {
      res = await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      if (res.ok) {
        setTimeout(() => {
          setTitle("");
          setBody("");
        }, 2000);
        setMsg({
          text: "Note saved",
          type: "success",
        });
      } else
        setMsg({
          text: (await res.json())?.msg || "Note failed to saved",
          type: "error",
        });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <StyledForm onSubmit={handleSubmit}>
        <IconBtn icon="arrow_back" handler={handler} />
        <h2>Add New Note</h2>
        {msg.text && <StyledMsg type={msg.type}>{msg.text}</StyledMsg>}
        <StyledTextbox
          type="text"
          placeholder="Type title here ..."
          required
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledTextArea
          placeholder="Type your note here ..."
          required
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <StyledSubmitBtn type="submit" id="submit">
          Save
        </StyledSubmitBtn>
      </StyledForm>
    </Overlay>
  );
}

export default NewNote;
