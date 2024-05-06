import React, { useState } from 'react'

export default function QnaCard({item}) {
  const { userName, userPicUrl, question, keywords, createdDate} = item
  return (
    <div className='qna-card'>
      <div className="card-header">
        <img className='user-img' src={userPicUrl} alt="user profile picture" />
        <div>
          <h4>{userName}</h4>
          <h6>{createdDate}</h6>
        </div>
      </div>
      <div className="card-footer">
        <h3 className='question'>{question}</h3>
        <button className='btn-answer'>Answer</button>
      </div>
      <div className="keywords">
        {keywords.map((keyword, index) => (
          <p className='keyword' key={index}>{keyword}</p>
        ))}
      </div>
    </div>
  )
}
