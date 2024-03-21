
'use client'
import React from 'react'

function Findings() {
  const cards =[
    {
        "id":1,
        "image":"/assets/graph.png"
        }
    
  ]
  return (
    <div id='findings' className='min-h-[100vh] bg-white text-black text-center '>
        <h2 className='text-5xl font-bold mb-14'>Why mental health is a big problem in India.</h2>
        {cards.map((card)=>{
          return (
            <img key={card.id} src={card.image} alt="statistics"/>
          )
        })}
            
        
        <p className='text-xl max-w-7xl m-auto text-center mt-6'>From the graph we understand that people of India doesn't care about mental health illness which futher becomes a big issue or we can say sometimes it leads to suicideOn futher survey we came to know that 1 in every 5 individuals suffers from some form of mental health illness symptoms. 50% of mental health conditions begin by age 14 and 75% of mental health conditions develop by age 24. 970 million people around the world struggle with some mental illness. One in four people are affected by a mental illness at some point in their lives. 14.3% of deaths worldwide, or approximately 8 million deaths each year, are attributable to mental disorders.</p>
    
    </div>
  )
}

export default Findings