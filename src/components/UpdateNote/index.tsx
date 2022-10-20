import { useCallback } from "react";
import { useInlineSubmission } from "../../hooks/useInlineSubmission";
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

function UpdateNote({ handler, titles, note }: IProps) {
  const validateTitle = useCallback(
    (title: string) => {
      if (!title) {
        return "title cannot be empty";
      }
      if (titles.includes(title)) {
        return "title has been used already";
      }

      return null;
    },
    [titles]
  );

  const validateBody = useCallback((body: string) => {
    if (!body) {
      return "body cannot be empty";
    }
    return null;
  }, []);

  const {
    value: titleValue,
    onChange: changeTitle,
    msg: titleMsg,
  } = useInlineSubmission(
    ((process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BACKEND_URL_PROD
      : process.env.REACT_APP_BACKEND_URL_DEV) ||
      "http://localhost:5000/notes/") + note._id,
    "title",
    note.title,
    validateTitle
  );
  const {
    value: bodyValue,
    onChange: changeBody,
    msg: bodyMsg,
  } = useInlineSubmission(
    ((process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BACKEND_URL_PROD
      : process.env.REACT_APP_BACKEND_URL_DEV) ||
      "http://localhost:5000/notes/") + note._id,
    "body",
    note.body,
    validateBody
  );

  return (
    <Overlay>
      <StyledForm>
        <IconBtn icon="arrow_back" handler={handler} />
        <h2>Update Note</h2>
        {titleMsg && (
          <StyledMsg type={titleMsg.type}>{titleMsg.text}</StyledMsg>
        )}
        <StyledTextbox
          type="text"
          placeholder="Type title here ..."
          required
          name="title"
          id="title"
          value={titleValue}
          onChange={(e) => {
            // e.target.value !== title && resetMsg();
            changeTitle(e.target.value);
          }}
        />
        {bodyMsg && <StyledMsg type={bodyMsg.type}>{bodyMsg.text}</StyledMsg>}
        <StyledTextArea
          placeholder="Type your note here ..."
          required
          name="body"
          id="body"
          value={bodyValue}
          onChange={(e) => {
            // e.target.value !== body && resetMsg();
            changeBody(e.target.value);
          }}
        />
      </StyledForm>
    </Overlay>
  );
}

export default UpdateNote;
