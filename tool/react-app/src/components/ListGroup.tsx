function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  



   
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No items found.</p> : null}
      {items.length === 0 && <p>No items found.</p>}
      <ul className="ListGroup">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
