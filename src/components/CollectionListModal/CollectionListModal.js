/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { createAnimeId } from "../../utils/CommonHelper";
import { AnimeWithCollectionContext, CollectionContext } from "../../utils/Context";
import { listCollectionModalStyle } from "./CollectionListModalStyle";
import CollectionModal from './CollectionModal/CollectionModal';

const CollectionListModal = props => {
  const collectionFromContext = useContext(CollectionContext);
  const animeWithCollectionsFromContext = useContext(AnimeWithCollectionContext);
  let component = (
      <h4>You have no collection yet.</h4>
  );
  
  const addToCollection = (collectionId, collectionName, animeId) => {
    const newAnimeCollection = {
      title: props.anime.title.english,
      native: props.anime.title.native,
      rating: props.anime.averageScore,
      coverImage: props.anime.coverImage.large,
    };

    collectionFromContext.collections[collectionId].animes[createAnimeId(animeId)] = newAnimeCollection;
    // collectionFromContext.setCollections(collectionFromContext.collections);

    if(animeWithCollectionsFromContext.animeCollections[createAnimeId(animeId)] !== undefined){
      animeWithCollectionsFromContext.animeCollections[createAnimeId(animeId)].collections[collectionId] = { id: collectionId, name: collectionName };
    }else{
      const newAnime = {
        id: createAnimeId(animeId),
        collections: {
          [collectionId]: {
            id: collectionId,
            name: collectionName
          }
        }
      };

      animeWithCollectionsFromContext.animeCollections[createAnimeId(animeId)] = newAnime;
    }
    animeWithCollectionsFromContext.setAnimeCollections(animeWithCollectionsFromContext.animeCollections);

    localStorage.setItem("collection-list", JSON.stringify(collectionFromContext.collections));
    localStorage.setItem("anime-with-collections", JSON.stringify(animeWithCollectionsFromContext.animeCollections));
    console.log(collectionFromContext.collections)
    alert("Collection Added!");
    props.closeAfterAdd();
  }

  if(props.collections.length > 0){
    component = (
      <ul css={listCollectionModalStyle}>
        {
          props.collections.map((collection, index) => {
            return <>
                    <CollectionModal 
                        clicked={() => addToCollection(collection.id, collection.name, props.anime.id)} 
                        name={collection.name} 
                        key={index+1} 
                        isAlreadyAdded={collection.animes[createAnimeId(props.anime.id)] !== undefined ? true: false} />
                    <hr css={{margin: 0}} />
                  </>
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