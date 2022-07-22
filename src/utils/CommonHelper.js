export const getRatingBgColor = (score) => {
  let ratingBgColor = "";

  if(score > 75) ratingBgColor = "green";
  else if(score > 50 && score <= 75) ratingBgColor = "#D9C52A";
  else if(score < 25 && score >= 50) ratingBgColor = "orange";
  else ratingBgColor = "red";

  return ratingBgColor;
}

export const getStatusAnime = (status) => {
  let innerMsg = ``;
  let bgColor = '';

  switch(status){
    case 'FINISHED':
      innerMsg = `&#9989; Finished`; bgColor = "#3AB4F2"
      break 
    case 'RELEASING':
      innerMsg = `&#128123; Releasing`; bgColor = "#FEB139"
      break 
    case 'CANCELLED':
      innerMsg = `&#9940; Cancelled`; bgColor = "#EB1D36"
      break 
    case 'NOT_YET_RELEASED':
      innerMsg = `&#9989; Not Released`; bgColor = "#A2B5BB"
      break 
  }

  return {
    innerMsg,
    bgColor,
  }
}

export const createRandomId = () => {
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const stringLen = string.length;
  let id = '';
  for(let i=0; i<5; i++){
    id += string[Math.floor(Math.random() * stringLen) % stringLen];
  }

  return id
}

export const initCollectionListObj = (name) => {
  let listObj = localStorage.getItem(name);
  if(listObj === null){
    localStorage.setItem(name, JSON.stringify({}));
  }

  return JSON.parse(listObj);
}

export const getKeyFromObject = (obj) => {
  const keys = Object.keys(obj);
  return keys;
}

export const collectionObjectToArray = (obj) => {
  const keys = Object.keys(obj);
  // console.log("[collectionObjectToArray] obj: ", obj);
  // console.log("[collectionObjectToArray] Object.keys(obj): ", Object.keys(obj))
  const array = [];

  keys.forEach(key => {
    array.push(obj[key]);
  })

  return array;
}

export const getCollectionFromAnime = (animeObj) => {
  // HARDCODE
  const collectionKeys = Object.keys(animeObj.collections);
  const array = [];

  collectionKeys.forEach(key => {
    array.push({
      id: key,
      ...animeObj.collections[key],
    });
  })

  return array;
}

export const getAnimesFromCollection = (collectionObj) => {
  const animeKeyList = Object.keys(collectionObj.animes);
  const array = [];

  animeKeyList.forEach(key => {
    array.push({
      id: key,
      ...collectionObj.animes[key],
    });
  })

  return array;
}

export const getAllCollection = (collections) => {
  // HARDCODE
  const collectionIdList = Object.keys(collections);
  const array = [];

  collectionIdList.forEach(key => {
    array.push(collections[key]);
  })

  return array;
}