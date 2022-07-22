/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import Collection from "./Collection/Collection";
import { collectionListStyle } from "./CollectionListStyle"

const CollectionList = (props) => {
  const navigate = useNavigate();
  let component = (
    <div>
      <h4>No collection with this anime</h4>
    </div>
  )

  const goToCollectionDetail = (id) => {
    navigate(`/collection/${id}`);
    window.scrollTo(0, 0);
  }

  if(Object.keys(props.collections).length > 0){
    component = (
      <div css={collectionListStyle}>
        {
          props.collections.map((collection) => {
            return <Collection name={collection.name} key={collection.id} click={() => goToCollectionDetail(collection.id)} />
          })
        }
      </div>
    )
  }
  return (component)
}

export default CollectionList;