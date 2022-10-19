import { StyledIconBtn } from "./IconBtn";

interface IProps {
  icon: string;
  handler: any;
}

function IconBtn({ icon, handler }: IProps) {
  return (
    <StyledIconBtn onClick={handler}>
      <span className="material-icons-outlined">{icon}</span>
    </StyledIconBtn>
  );
}

export default IconBtn;
