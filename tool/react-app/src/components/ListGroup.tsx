function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];


  const getMessage = () => {
   return items.length ===0? <p> No items found.</p> : null}

  
  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="ListGroup">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
