import logo from './logo.svg';
import './App.css';

import BookList from './components/booklist/index';
import BookForm from './components/bookform/index'
import { useState } from 'react';

function App() {

  const [bookList, setBookList] = useState([])

  const addBookDetais = (data) => {
    setBookList(bookList.concat(data))
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="book-form">
          <BookForm onBookSubmit={(data) => addBookDetais(data)}/> 
        </div>
        <div className="book-list">
          <BookList bookList={bookList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
