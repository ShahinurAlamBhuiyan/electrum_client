import React from 'react'
import './QnA.css'
// import './App.css';

export default function SearchBar() {
  return (
    <div className='search_container'>
        <input className='job_input' placeholder='Search your Enter your qustion here...'></input>
        <button className='btn_job_search'>Post</button>
    </div>
  )
}
