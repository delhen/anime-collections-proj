import Button from "../../Button/Button";
/** @jsxImportSource @emotion/react */

const CollectionBody = props => {
  return (
    <div css={{padding: "4px"}}>
      <p><b>{props.name}</b></p>
      <Button color="blue" clickAction={e => props.onEdit(e, props.id, props.name)}>Edit</Button>
      <Button color="pink" clickAction={e => props.onDelete(e, props.id)}>Delete</Button>
      <br/>
      <br/>
    </div>
  )
}

export default CollectionBody;