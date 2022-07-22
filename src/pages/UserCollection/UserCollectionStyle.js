export const gridLayout = {
  display: 'grid',
  gap: '16px',
  padding: '16px',
  gridTemplateColumns: 'repeat(2, auto)',
  
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(3, auto)',
  },
  '@media (min-width: 900px)': {
    gridTemplateColumns: 'repeat(4, auto)',
  }
}

export const containerLayout = {
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: "center",
  width: "100%",
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

export const inputTextStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
  borderWidth: '1px'
}