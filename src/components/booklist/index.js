import './index.css';

function BookList(props) {

  return (
    <div className="BookList">
      <h1>My Book List</h1>
      {
        props.bookList.map(element => {
          return <div className="book">
            <div>Book : {element.bookName}</div>
            <div>Writer : {element.writerName}</div>
            <div>Overview : {element.overView}</div>
            <div>Rating : {element.rating}</div>
          </div>
        })
      }
    </div>
  );
}

export default BookList;
