/** @jsxImportSource @emotion/react */
import { listCollectionModalStyle } from "./CollectionListModalStyle";
import CollectionModal from './CollectionModal/CollectionModal';

const CollectionListModal = props => {
  let component = (
      <h4>You have no collection yet.</h4>
  );

  if(props.collections.length > 0){
    component = (
      <ul css={listCollectionModalStyle}>
        {
          props.collections.map((collection, index) => {
            return <CollectionModal name={collection.name} key={index+1} isAlreadyAdded={collection.animes[props.animeId] !== undefined ? true: false} />
          })
        }
      </ul>
    )
  }

  return (
    <div>
      {component}
    </div>
  )
}

export default CollectionListModal;