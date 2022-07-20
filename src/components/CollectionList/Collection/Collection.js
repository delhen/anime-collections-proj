/** @jsxImportSource @emotion/react */
import { collectionStyle, marginLeftStyle } from "./CollectionStyle";

const Collection = (props) => {
  return(
    <div css={collectionStyle}>
      &#10084; <span css={{marginLeftStyle}}>{props.name}</span>
    </div>
  )
}

export default Collection;