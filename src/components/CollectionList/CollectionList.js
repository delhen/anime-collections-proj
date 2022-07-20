/** @jsxImportSource @emotion/react */
import Collection from "./Collection/Collection";
import { collectionListStyle } from "./CollectionListStyle"

const CollectionList = (props) => {
  let component = (
    <div>
      <h4>No collection with this anime</h4>
    </div>
  )

  // console.log('[CollectionList] props.collections: ', props.collections)

  if(Object.keys(props.collections).length > 0){
    component = (
      <div css={collectionListStyle}>
        {
          props.collections.map((collection) => {
            return <Collection name={collection.name} key={collection.id} />
          })
        }
      </div>
    )
  }
  return (component)
}

export default CollectionList;