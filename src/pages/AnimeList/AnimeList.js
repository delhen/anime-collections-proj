/** @jsxImportSource @emotion/react */
import { useContext, useRef, useState } from "react";
import { useQuery } from "@apollo/client";

import { animeListOptions, GET_ANIME_LIST } from "../../utils/AnimeApi";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import AnimeBody from "../../components/Card/AnimeBody/AnimeBody";
import Button from "../../components/Button/Button";

import { animeListContainerStyle } from "./AnimeListStyle";
import { gridStyle } from "../../utils/CommonStyle";
import { AnimeWithCollectionContext, CollectionContext, ModalContext } from "../../utils/Context";
import Modal from "../../components/Modal/Modal";
import CollectionListModal from "../../components/CollectionListModal/CollectionListModal";
import { getAllCollection, saveDataToStorage } from "../../utils/CommonHelper";
import { inputTextStyle } from "../AnimeDetail/AnimeDetailStyle";
import { validateCollectionName } from "../../utils/CollectionHelper";
import { addBulkOfAnimesToExistingCollection, addBulkOfAnimesToNewCollection } from "../../utils/AnimeHelper";

function AnimeList() {
  const modalContext = useContext(ModalContext);
  const collectionContext = useContext(CollectionContext);
  const animeCollectionsContext = useContext(AnimeWithCollectionContext);
  const collections = getAllCollection(collectionContext.collections);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnimeList, setSelectedAnimeList] = useState([]);
  const [step, setStep] = useState(1);
  const collectionNameRef = useRef(null);

  const goToNextPage = (page) => { setCurrentPage(page+1) }
  const goToPrevPage = (page) => { setCurrentPage(page-1) }

  const { loading, error, data } = useQuery(GET_ANIME_LIST, animeListOptions(currentPage));
  if (loading) return <Spinner />;

  const animeList = data.Page.media;

  const clearAll = () => {
    modalContext.setShowModal(false); 
    setSelectedAnimeList([]); 
    setStep(1);
  }

  const addNewCollection = () => {
    try{
      const collectionName = collectionNameRef.current.value;
      validateCollectionName(collectionName, collections);

      const selectedAnimes = animeList.filter((anime) => selectedAnimeList.includes(anime.id));
      addBulkOfAnimesToNewCollection(collectionName, selectedAnimes, collectionContext, animeCollectionsContext);
      saveDataToStorage(collectionContext.collections, animeCollectionsContext.animeCollections);
      
      alert("Bulk of animes added to new collection!");
      clearAll();
    }catch(errMsg){
      alert(errMsg);
    }
  }

  const addBulkOfAnimesToExistCollection = (collectionId, collectionName) => {
    const collectionObj = {
      id: collectionId,
      name: collectionName
    }
    const selectedAnimes = animeList.filter((anime) => selectedAnimeList.includes(anime.id));
    addBulkOfAnimesToExistingCollection(collectionObj, selectedAnimes, collectionContext, animeCollectionsContext);
    saveDataToStorage(collectionContext.collections, animeCollectionsContext.animeCollections);
    
    alert("Bulk of animes added to the collection!");
    clearAll();
  }

  let formAdd = (
    <>
      <div>
        <h4>Add Bulk of Animes</h4>
      </div>
      <div>
        <ul css={{
          listStyleType: "none",
          padding: 0,
          margin: '16px 0',
          textAlign: "left"
        }}>
          {
            animeList.map(anime => {
              return (
                <div key={anime.id}>
                  <li css={{
                    padding: '10px',
                    '&:hover, &:active': {
                      backgroundColor: '#e5e7e8',
                      cursor: 'pointer'
                    }}
                  } onClick={() => onSelectedAnime(anime.id)}>
                    <input type="checkbox" 
                          checked={selectedAnimeList.indexOf(anime.id) != -1 ? "checked" : ""} 
                          onChange={() => onSelectedAnime(anime.id)} />
                    <span>{anime.title.english != null ? anime.title.english : anime.title.native }</span>
                  </li>
                  <hr css={{ margin: 0 }} />
                </div>
              )
            })
          }
        </ul>
        <Button color="pink" clickAction={() => {
          if(selectedAnimeList.length == 0) alert("Select at least one anime!");
          else setStep(2);
        }}>Next</Button>
      </div>
    </>
  )

  if(step === 2){
    formAdd = (
      <>
        <div>
          <h4>Add to Collection</h4>
        </div>
        <div>
          <div>
            <input type="text" placeholder="New collection name" css={inputTextStyle} ref={collectionNameRef} />
            <Button color="pink" clickAction={() => addNewCollection()}>+ New</Button>
          </div>
          <CollectionListModal collections={collections} bulk={true} collectionClickActionForBulk={addBulkOfAnimesToExistCollection} />
        </div>
      </>
    )
  }

  const onSelectedAnime = (animeId) => {
    let updatedList = [...selectedAnimeList];
    const animeNotExist = (selectedAnimeList.indexOf(animeId) === -1);
    if(animeNotExist){
      updatedList = [...selectedAnimeList, animeId]
    }else{
      updatedList.splice(selectedAnimeList.indexOf(animeId), 1);
    }

    setSelectedAnimeList(updatedList);
  }

  return (
    <div css={animeListContainerStyle}>
      <Button clickAction={() => modalContext.setShowModal(true)} color="white" >+ Add Bulk of Animes</Button>
      <div css={gridStyle}>
        {
          animeList.map(anime => {
            return (
              <Card img_url={anime.coverImage.large} id={anime.id} key={anime.id}>
                <AnimeBody title={anime.title.english} title_native={anime.title.native} rating={anime.averageScore} />
              </Card>
            )
          })
        }
      </div>
      <Pagination 
          page={currentPage} 
          nextPage={data.Page.pageInfo.hasNextPage} 
          onNextPage={() => goToNextPage(currentPage)}
          onPrevPage={() => goToPrevPage(currentPage)}
      />
      <Modal show={modalContext.showModal} onClose={() => clearAll()}>
        {formAdd}
      </Modal>
    </div>
  );
}

export default AnimeList;