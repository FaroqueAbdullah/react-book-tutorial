import './index.css';

function BookList(props) {

  const removeBook = (data) => {
    props.removebook(data)
  }

  const removeAllbooks = (data) => {
    props.removeAllbooks(data)
  }

  return (
    <div className="BookList">
      <div className="booklist-header">
        <h1>My Book List</h1>
        <button className="button-style" onClick={() => removeAllbooks()}>Refresh</button>
      </div>
      {
        props.bookList.map((element, i) => {
          return <div className="book">
            <div>Book : {element.bookName}</div>
            <div>Writer : {element.writerName}</div>
            <div>Overview : {element.overView}</div>
            <div>Rating : {element.rating}</div>
            <button onClick={() => removeBook(i)}>Remove</button>
          </div>
        })
      }
    </div>
  );
}

export default BookList;
