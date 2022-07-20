export const animeListContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: "center",
  width: "100%",
}

export const animeListStyle = {
  display: 'grid',
  gap: '8px',
  padding: '16px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoRow: '1fr',
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@media (min-width: 900px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
  }
}