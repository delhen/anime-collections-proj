import { getKeyFromObject, validateExistingName, validateSpecialChars } from "./CommonHelper";

export const validateCollectionName = (name, collections) => {
  if(name === null || name === "") throw "Collection name cannot be empty!";
  if(validateSpecialChars(name)) throw "Collection name has special characters!";
  if(!validateExistingName(name, collections)) throw "Collection name already exist!";
}

export const processEditCollectionName = (collectionId, newName, collectionContext, animeWithCollectionContext) => {
  collectionContext.collections[collectionId] = {
    ...collectionContext.collections[collectionId],
    name: newName
  }

  const animeCollecitons = animeWithCollectionContext.animeCollections;
  const keyAnimeCollections = getKeyFromObject(animeCollecitons);
  keyAnimeCollections.forEach(animeId => {
    if(animeCollecitons[animeId].collections[collectionId] !== undefined){
      animeCollecitons[animeId].collections[collectionId] = {
        ...animeCollecitons[animeId].collections[collectionId],
        name: newName,
      }
    }
  })
}

export const processRemoveAnimeFromCollection = (collectionId, animeId, collectionContext, animeCollectionContext) => {
  const animesReplicate = collectionContext.collections[collectionId].animes;
  delete animesReplicate[animeId];
  collectionContext.setCollections({
    ...collectionContext.collections,
    [collectionId]: {
      ...collectionContext.collections[collectionId],
      animes: animesReplicate,
    }
  })

  const collectionReplicate = animeCollectionContext.animeCollections[animeId].collections;
  delete collectionReplicate[collectionId];
  animeCollectionContext.setAnimeCollections({
    ...animeCollectionContext.animeCollections,
    [animeId]: {
      ...animeCollectionContext.animeCollections[animeId],
      collections: collectionReplicate,
    }
  })
}