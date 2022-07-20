/** @jsxImportSource @emotion/react */
import { closeModalBtnStyle, modalBackdropStyle, modalStyle, relativePos } from "./ModalStyle";

const Modal = props => {

  if(!props.show){
    return null;
  }

  return (
    <div css={modalBackdropStyle} onClick={props.onClose}>
      <div css={modalStyle} onClick={e => e.stopPropagation()}>
        <div css={relativePos}>
          <button css={closeModalBtnStyle} onClick={props.onClose}>x</button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;