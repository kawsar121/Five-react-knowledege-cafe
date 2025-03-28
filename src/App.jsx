
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import BookMarks from './Component/BookMarks/BookMarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [read, setRead] = useState(0);
  const handleBookmarks = (collect)=>{
    // console.log(collect)
    //eta likhar karon holo jate user bookmark akbarer beshi click korte na pare
    if (bookmarks.some((bookmark) => bookmark.id === collect.id)) {
      return;
  }
    const neMark = [...bookmarks, collect];
    setBookmarks(neMark)
  }
  const handleAsRead = (time)=>{
    console.log("lol is pol", time);
    const newTime = read+time;
    setRead(newTime)
  }

  return (
    <div className='max-w-7xl mx-auto '>
      
      <Header></Header>
      <div className='flex justify-center gap-[450px]'>
      <Blogs receive={handleBookmarks} readReacive={handleAsRead}></Blogs>
      <BookMarks markBooks={bookmarks} collectRead={read}></BookMarks>
      </div>
    </div>
  )
}

export default App
