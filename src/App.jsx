
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Header'

function App() {
  
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingtime] = useState([])

  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time =>{
    setReadingtime( newReadingTime => newReadingTime + time);
  }
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App;
