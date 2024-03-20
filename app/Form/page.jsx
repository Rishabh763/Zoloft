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

            }
        
    ]

    return (
        <div className="form w-[100%]">
            <div className="link flex gap-6">
                <p className={activeLink === '1' ? 'active' : ''} onClick={() => handleLinkClick('1', 0)}>1</p>
                <p className={activeLink === '2' ? 'active' : ''} onClick={() => handleLinkClick('2', 1)}>2</p>
                <p className={activeLink === '3' ? 'active' : ''} onClick={() => handleLinkClick('3', 2)}>3</p>
                <p className={activeLink === '4' ? 'active' : ''} onClick={() => handleLinkClick('4', 3)}>4</p>
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
