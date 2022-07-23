/** @jsxImportSource @emotion/react */
import { createAnimeId } from "../../utils/CommonHelper";
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
            if(!props.bulk){
              let isAlreadyAdded = (collection.animes[createAnimeId(props.anime.id)] !== undefined);
              return (
                <div key={index + 1} >
                  <CollectionModal
                    clicked={() => props.collectionClickAction(collection.id, collection.name, props.anime, isAlreadyAdded)}
                    name={collection.name}
                    isAlreadyAdded={isAlreadyAdded ? true : false} />
                  <hr css={{ margin: 0 }} />
                </div>
              )
            }else{
              return (
                <div key={index + 1} >
                  <CollectionModal
                    clicked={() => props.collectionClickActionForBulk(collection.id, collection.name)}
                    name={collection.name} />
                  <hr css={{ margin: 0 }} />
                </div>
              )
            }
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