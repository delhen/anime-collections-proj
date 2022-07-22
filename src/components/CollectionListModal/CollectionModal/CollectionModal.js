/** @jsxImportSource @emotion/react */
const CollectionModal = props => {
  return (
    <li css={{
      padding: '4px 8px',
      '&:hover': {
        backgroundColor: 'gray',
        cursor: 'pointer'
      }
    }} onClick={props.clicked}><strong>{props.name}</strong> {props.isAlreadyAdded ? <small><i>(Already added)</i></small> : ""}</li>
  )
}

export default CollectionModal;