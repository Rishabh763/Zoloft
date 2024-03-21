"use client"

import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link'


function Page() {
    const [activeIndex, setActiveIndex] = useState(0); 
    const [answers, setAnswers] = useState([]); 

    const [data, setData] = useState([]);
    // const router = useRouter();

//     const handleSubmit = () => {
//     // Simulated array data for demonstration
//     const dataArray = ['item1', 'item2', 'item3'];

//     setData(updatedAnswers);

//     router.push({
//       pathname: '/result', // Path to the target page
//       query: { data: JSON.stringify(updatedAnswers) }, // Pass data as query parameters
//     });
//   };



 
    // Array of questions
    // const questions = [
    //     { "id": 1, "q": "Do you often feel excessive worry or fear about various aspects of your life?","opt1":"yes","opt2":"No","opt3":"Not Sure"},
    //     { "id": 2, "q": "Do you frequently experience physical symptoms such as rapid heartbeat, sweating, or trembling?","opt1":"Yes","opt2":"No","opt3":"Not Sure"},
    //     { "id": 3, "q": "Do you experience a loss of interest or pleasure in activities you once enjoyed?","opt1":"Yes","opt":"NO","opt":"Not Sure" },
    //     { "id": 4, "q": "Do you feel hopeless or helpless about the future?","opt1":"Yes","opt":"NO","opt":"Not Sure" },
    //     { "id": 5, "q": "Have you experienced or witnessed a traumatic event that involved actual or threatened death, serious injury, or sexual violence?","opt1":"Yes","opt":"NO","opt":"Not Sure"  },
    //     { "id": 6, "q": "Have you or threatened death, serious injury, or sexual violence?","opt1":"Yes","opt":"NO","opt":"Not Sure"  },
    //     { "id": 7, "q": "Have you experienced or witnessed a traumatic event that , or sexual violence?","opt1":"Yes","opt":"NO","opt":"Not Sure"  }
    // ];
    const questions = [
        { "id": 1, "q": "Do you often feel excessive worry or fear about various aspects of your life?","opt1":"yes","opt2":"No","opt3":"Not Sure"},
        { "id": 2, "q": "How does 'A colorful abstract painting' image makes you feel","opt1":"Positive","opt2":"Negative","opt3":"Neutral"},
        { "id": 3, "q": "Do you experience a loss of interest or pleasure in activities you once enjoyed?","opt1":"Yes","opt2":"No","opt3":"Not Sure" },
        { "id": 4, "q": "which color from the following you will select","opt1":"RED","opt2":"BLUE","opt3":"YELLOW" },
        { "id": 5, "q": "Have you experienced or witnessed a traumatic event that involved actual or threatened death, serious injury, or sexual violence?","opt1":"Yes","opt2":"No","opt3":"Not Sure"  },
        { "id": 6, "q": "How does 'A solitary figure standing on a beach at sunset' image makes you feel","opt1":"Positive","opt2":"Negative","opt3":"Neutral"  },
        { "id": 7, "q": "Have you experienced or witnessed a traumatic event that , or sexual violence?","opt1":"Yes","opt2":"No","opt3":"Not Sure"  }
    ];


    const handleQuestionClick = (index) => {
        setActiveIndex(index); 
    };

    // Function to handle storing answer
    const handleAnswerSelect = (value) => {
        const updatedAnswers = [...answers]; // Copy current answers array
        updatedAnswers[activeIndex] = value; // Update answer at active index
        setAnswers(updatedAnswers);
        console.log(updatedAnswers) // Update answers state
    };


    const handlePrevClick = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };


    const handleNextClick = () => {
        if (activeIndex < questions.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    return (
        <div className="w-full bg-white min-h-screen">
            <div className="link flex gap-6">
                {questions.map((question, index) => (
                    <p
                        key={question.id}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleQuestionClick(index)}
                    >
                        {question.id}
                    </p>
                ))}
            </div>
            {questions.map((question, index) => {
                if (index === activeIndex) {
                    return (
                        <fieldset id='Form' className='form max-w-[700px] mx-auto' key={question.id}>
                            <legend required>{question.q}</legend>
                            <label>
                                <input
                                    type="radio"
                                    name="recomend"
                                    value="yes"
                                    onChange={() => handleAnswerSelect('yes')}
                                />
                                {question.opt1}<br />
                                <input
                                    type="radio"
                                    name="recomend"
                                    value="maybe"
                                    onChange={() => handleAnswerSelect('maybe')}
                                />
                                {question.opt2}<br />
                                <input
                                    type="radio"
                                    name="recomend"
                                    value="no"
                                    onChange={() => handleAnswerSelect('no')}
                                />
                                {question.opt3}
                            </label>
                            <div className='flex justify-between'>
                                <button className="bg-black text-white w-fit text-3xl" onClick={handlePrevClick} disabled={activeIndex === 0}>Prev</button>
                                <button className="bg-black text-white w-fit text-3xl" onClick={handleNextClick} disabled={activeIndex === questions.length - 1}>Next</button>
                            </div>
                            {activeIndex === questions.length - 1  && (
                             <Link href='/Recommedation'> <button className="bg-black text-white w-fit text-3xl">Submit</button></Link>
                           )}
                            
                        </fieldset>
                    );
                }
                return null;
            })}
            
        </div>
    );
}

export default Page;
