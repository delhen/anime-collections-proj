/** @jsxImportSource @emotion/react */
import { listCollectionStyle } from "./CollectionModalStyle";

const CollectionModal = props => {
  return (
    <li css={listCollectionStyle} onClick={props.clicked}>
      <strong>{props.name}</strong> {props.isAlreadyAdded ? <small><i>(Already added)</i></small> : ""}
    </li>
  )
}

export default CollectionModal;