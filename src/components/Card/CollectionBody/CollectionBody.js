import { btnStyle, editBtnColor, removeBtnColor } from "./CollectionBodyStyle"
/** @jsxImportSource @emotion/react */

const CollectionBody = props => {
  return (
    <div css={{padding: "4px"}}>
      <p><b>{props.name}</b></p>
      <button css={{...btnStyle, ...editBtnColor}} onClick={e => e.stopPropagation()}>Edit</button>
      <button css={{...btnStyle, ...removeBtnColor}} onClick={e => e.stopPropagation()}>Delete</button>
      <br/>
      <br/>
    </div>
  )
}

export default CollectionBody;