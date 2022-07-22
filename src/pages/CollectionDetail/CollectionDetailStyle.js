export const containerLayout = {
  marginTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: "center",
  width: "100%",
}

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