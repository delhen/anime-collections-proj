const CollectionModal = props => {
  return (
    <li><strong>{props.name}</strong> {props.isAlreadyAdded ? <small><i>(Already added)</i></small> : ""}<hr /></li>
  )
}

export default CollectionModal;