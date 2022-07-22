import { btnColor, btnStyle } from "./ButtonStyle";

/** @jsxImportSource @emotion/react */
const Button = props => {
  return <button css={{...btnStyle, ...btnColor[props.color]}} onClick={props.clickAction}>{props.children}</button>
}

export default Button;