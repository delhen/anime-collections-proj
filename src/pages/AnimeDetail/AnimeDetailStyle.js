export const animeDetailSectionStyle = {
  padding: "20px",
  "& .info-detail div, & .genre div": {
    color: "white",
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: 'bold',
    margin: "4px"
  },
  "& .genre div": {
    backgroundColor: "#FF0063"
  }
}

export const addCollectionBtnStyle = {
  borderWidth: 0,
  padding: '8px',
  borderRadius: '4px',
  backgroundColor: '#EAF6F6',
  fontWeight: 'bold',
  '&:hover, &:active': {
    backgroundColor: '#C3E1E1',
    cursor: 'pointer'
  }
}

export const inputTextStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
  borderWidth: '1px'
}

export const addNewCollectionBtnStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
  margin: '0 4px',
  borderWidth: '0',
  backgroundColor: '#FF0063',
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#FF3181',
  }
}