import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Post from './Post'

function View() {
  return (
    <Routes>
        {/* <Route path='/' element={<div>Hello i am index</div>}></Route> */}
        <Route index element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/post' element={<Post></Post>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
    </Routes>
  )
}

export default View