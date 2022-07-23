export const navigationStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  '& ul': {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    '& li': {
      display: "inline",
      padding: '8px',
      '& a': {
        color: '#EAF6F6',
        textDecoration: 'none',
        fontWeight: 600,
        '&:hover': {
          color: '#c9d0d0'
        }
      }
    }
  }
}