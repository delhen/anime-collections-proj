export const modalBackdropStyle = {
  position: "fixed",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}

export const modalStyle = {
  width: "80%",
  backgroundColor: "white",
  padding: "16px",
  borderRadius: "8px",
  "@media(min-width: 600px)":{
    width: "25%",
  }
}

export const closeModalBtnStyle = {
  position: "absolute",
  top: '-5px', right: 0,
  borderWidth: 0,
  padding: "12px",
  backgroundColor: 'red',
  borderRadius: '8px',
  fontWeight: 'bold',
  color: 'white'
}

export const relativePos = {position: 'relative'}