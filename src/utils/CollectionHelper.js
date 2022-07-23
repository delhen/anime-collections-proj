import { validateExistingName, validateSpecialChars } from "./CommonHelper";

export const validateCollectionName = (name, collections) => {
  if(name === null || name === "") throw "Collection name cannot be empty!";
  if(validateSpecialChars(name)) throw "Collection name has special characters!";
  if(!validateExistingName(name, collections)) throw "Collection name already exist!";
}