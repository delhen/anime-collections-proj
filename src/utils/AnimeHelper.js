import { createAnimeId, createRandomId } from "./CommonHelper"

const processAnimeAndCollection = (collectionId, nameCollection, animeObj, collectionContext, animeWithCollectionsContext) => {
  const newAnimeCollection = {
    title: animeObj.title.english,
    native: animeObj.title.native,
    rating: animeObj.averageScore,
    coverImage: animeObj.coverImage.large,
  }

  if(collectionContext.collections[collectionId] !== undefined){
    collectionContext.collections[collectionId].animes[createAnimeId(animeObj.id)] = newAnimeCollection;
  }else{
    collectionContext.collections[collectionId] = {
      name: nameCollection,
      id: collectionId,
      animes: {
        [createAnimeId(animeObj.id)]: newAnimeCollection
      }
    }
  }

  if(animeWithCollectionsContext.animeCollections[createAnimeId(animeObj.id)] !== undefined){
    animeWithCollectionsContext.animeCollections[createAnimeId(animeObj.id)].collections[collectionId] = { name: nameCollection }
  }else{
    animeWithCollectionsContext.animeCollections[createAnimeId(animeObj.id)] = {
      id: createAnimeId(animeObj.id),
      collections: {
        [collectionId]: {
          name: nameCollection,
        }
      }
    }
  }
}

export const addAnimeToNewCollection = (nameCollection, animeObj, collectionContext, animeWithCollectionsContext) => {
  const collectionId = createRandomId()
  processAnimeAndCollection(collectionId, nameCollection, animeObj, collectionContext, animeWithCollectionsContext);
}

export const addBulkOfAnimesToNewCollection = (nameCollection, animes, collectionContext, animeWithCollectionsContext) => {
  const collectionId = createRandomId();
  animes.forEach(anime => {
    processAnimeAndCollection(collectionId, nameCollection, anime, collectionContext, animeWithCollectionsContext);
  });
}

export const addAnimeToExistingCollection = (collectionObj, animeObj, collectionContext, animeWithCollectionsContext, alreadyExist) => {
  if(alreadyExist) throw "You already add the anime to this collection!";
  processAnimeAndCollection(collectionObj.id, collectionObj.name, animeObj, collectionContext, animeWithCollectionsContext);
}

export const addBulkOfAnimesToExistingCollection = (collectionObj, animes, collectionContext, animeWithCollectionsContext) => {
  console.log(collectionObj)
  animes.forEach(anime => {
    processAnimeAndCollection(collectionObj.id, collectionObj.name, anime, collectionContext, animeWithCollectionsContext);
  });
}