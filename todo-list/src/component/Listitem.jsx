function ListItem(props) {
  return (
    <div>
      <input type="checkbox"></input>
      <label>{props.name}</label>
    </div>
  );
}

export default ListItem;
