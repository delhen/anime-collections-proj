const hoverAndActiveAction = '&:hover, &:active';

export const btnStyle = {
  padding: '8px 12px',
  borderRadius: '4px',
  margin: '0 4px',
  borderWidth: '0',
  cursor: 'pointer',
  fontWeight: 'bold',
}

export const btnColor = {
  white: {
    backgroundColor: '#EAF6F6',
    color: 'black',
    [hoverAndActiveAction]: {
      backgroundColor: '#dfe7e7'
    }
  },
  pink: {
    backgroundColor: '#FF0063',
    color: 'white',
    [hoverAndActiveAction]: {
      backgroundColor: '#FF3181',
    }
  },
  blue: {
    backgroundColor: "#3AB4F2",
    color: 'white',
    [hoverAndActiveAction]: {
      backgroundColor: '#32a0d7',
    }
  },
  red: {
    backgroundColor: "#e71049",
    color: 'white',
    [hoverAndActiveAction]: {
      backgroundColor: '#b0254a',
    }
  }
}