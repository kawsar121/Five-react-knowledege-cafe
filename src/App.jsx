
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (collect)=>{
    // console.log(collect)
    const neMark = [...bookmarks, collect];
    setBookmarks(neMark)
  }

  return (
    <div className='max-w-7xl mx-auto '>
      
      <Header></Header>
      <div className='flex justify-center gap-[450px]'>
      <Blogs receive={handleBookmarks}></Blogs>
      <BookMarks markBooks={bookmarks}></BookMarks>
      </div>
    </div>
  )
}

export default App
