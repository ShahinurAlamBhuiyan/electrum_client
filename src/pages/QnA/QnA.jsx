import React, { useState } from 'react'
import QnaHeader from '../../components/QnA/QnaHeader'
import QnaCard from '../../components/QnA/QnaCard';
import qnaData from '../../qnaData.json'

const QnA = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const showLessCards = () => {
    setVisibleCards(3)
  };
  const showMoreCards = () =>{
    setVisibleCards(qnaData.length)
  };
  return (
    <>
      <QnaHeader />
      {qnaData.slice(0,visibleCards).map((item) => (
        <QnaCard 
          key={item.id}
          item={item}
          
        />
      ))}
      {
            visibleCards < qnaData.length &&(
              <button className='btn_see_more text-white' onClick={() =>showMoreCards()}>Show More</button>
            )
          }
          {
            visibleCards > 3 &&(
              <button className='btn_see_more text-white' onClick={()=>showLessCards()}>Show Less</button>
            )
          }
    </>
  );
}

export default QnA;
