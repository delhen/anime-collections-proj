export const cardStyle = {
  borderRadius: '8px',
  backgroundColor: 'white',
  color: 'black',
  overflow: 'hidden',
  cursor: "pointer",
  maxWidth: "250px",
  '& .image-holder': {
    width: '100%',
    position: 'relative',
    '& img': {
      maxWidth: '100%'
    }
  },
  '& p': {
    margin: '6px 0',
  }
}