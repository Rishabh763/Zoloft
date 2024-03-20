'use client'

import React, { useState, useEffect } from 'react';

function Page() {
    const [activeLink, setActiveLink] = useState('1');
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        setCurrent(0);
    }, []);

    const handleLinkClick = (link, id) => {
        setActiveLink(link);
        setCurrent(id);
    };

    const questions =[
        {
           "id":1,
            "q":"Do you often feel excessive worry or fear about various aspects of your life?"
        },
           {
            "id":2,
            "q":"Do you frequently experience physical symptoms such as rapid heartbeat, sweating, or trembling?"
        },
           {
            "id":3,
            "q":"Do you experience a loss of interest or pleasure in activities you once enjoyed?"
        }, 
        {
            "id":4,
            "q":"Do you feel hopeless or helpless about the future?"
        },
        {
            "id":5,
            "q":"Have you experienced or witnessed a traumatic event that involved actual or threatened death, serious injury, or sexual violence?"

        },
        {
            "id":6,
            "q":"Have you or threatened death, serious injury, or sexual violence?"

        },
        {
            "id":7,
            "q":"Have you experienced or witnessed a traumatic event that , or sexual violence?"

        }
        
    ]

    return (
        <div className="w-[100%] bg-white min-h-screen">
            <div className="link flex gap-6">
            {questions.map((question, index) => {
                return (
                        <p key={question.id} className={activeLink === index ? 'active' : ''} onClick={() => handleLinkClick(`${question.id}`, index)}>{question.id}</p>
                    )})
                }
            </div>
            {questions.map((question, index) => {
                if (index === current) {
                    return (
                        <fieldset className='form' key={question.id}>
                            <legend>{question.q}</legend>
                            <label htmlFor="yes">
                                <input id="yes" type="radio" name="recomend" value="yes" />
                                Definitly
                            </label>
                            <label htmlFor="maybe">
                                <input id="maybe" type="radio" name="recomend" value="maybe" />
                                Maybe
                            </label>
                            <label htmlFor="no">
                                <input id="no" type="radio" name="recomend" value="no" />
                                Not Sure
                            </label>
                        </fieldset>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default Page;
