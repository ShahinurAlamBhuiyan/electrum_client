import React from 'react'
import './Style.css'

export default function QnaHeader() {
  return (
    <div className='qna-container'>
        {/* <div className="search-container"> */}
        <button className='btn-post'>Create Post</button>
          <input
          className='input_comp search_qna'
          type='text'
          placeholder='Search your questions here.....'
          // value={searchTerm}
          // onChange={e => setSearchTerm(e.target.value)}
          />
        {/* </div> */}

    </div>
  )
}


