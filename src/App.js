import logo from './logo.svg';
import './App.css';

import BookList from './components/booklist/index';
import BookForm from './components/bookform/index'
import { useState } from 'react';

function App() {

  const [bookList, setBookList] = useState([])

  const removebook = (index) => {
    setBookList(bookList.filter( (data, i) => i !== index))
  }

  const addBookDetais = (data) => {
    setBookList(bookList.concat(data))
  }

  const removeAllbooks = () => {
    setBookList([])
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="book-form">
          <BookForm onBookSubmit={(data) => addBookDetais(data)}/> 
        </div>
        <div className="book-list">
          <BookList bookList={bookList} removebook={(index) => removebook(index)} removeAllbooks={() => removeAllbooks()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
