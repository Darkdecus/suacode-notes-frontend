import { StyledFooter, StyledNote, StyledText, StyledTitle } from "./Note";

interface IProps {
  note: {
    title: string;
    body: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  };
}

function Note({ note: { title, body, createdAt, updatedAt } }: IProps) {
  return (
    <StyledNote>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{body}</StyledText>
      <StyledFooter></StyledFooter>
    </StyledNote>
  );
}

export default Note;
