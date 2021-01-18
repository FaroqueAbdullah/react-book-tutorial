import './index.css'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';

function BookForm(props) {

  const [bookName, setBookName] = useState('');
  const [writerName, setWriterName] = useState('');
  const [overView, setOverView] = useState('');
  const [rating, setRating] = useState(null);

  const ratingChanged = (newRating) => {
    setRating(newRating)
  };

  const saveInput = () => {
    const bookObj = {
      bookName: bookName,
      writerName: writerName,
      overView: overView,
      rating: rating
    }
    props.onBookSubmit(bookObj)
    setBookName('')
    setWriterName('')
    setOverView('')
    setRating(null)
  }

  return (
    <div className="BookForm">
      <h1>Add new book Name</h1>
      <input className="input-box" type="text" onChange={(e) => setBookName(e.target.value)} value={bookName} placeholder="book name"/>
      <input className="input-box" type="text" onChange={(e) => setWriterName(e.target.value)} value={writerName} placeholder="Writer name"/>
      <input className="input-box" type="text" onChange={(e) => setOverView(e.target.value)} value={overView} placeholder="Overview"/>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={50}
        activeColor="#ffd700"
      />
      <button className="my-button" onClick={() => saveInput()}>Save</button>
    </div>
  );
}

export default BookForm;
