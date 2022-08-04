import React from 'react';

import "./FeedbackOptions.css";

// available options for the customer
const FeedbackOptions = (props: any) => {

    const options = [
        { text: '129326', label:'terrible', handler: () => {}, id: 1 },
        { text: '128078', label:'bad', handler: () => {}, id: 2 },
        { text: '128528', label:'ok', handler: () => {}, id: 3 },
        { text: '128077', label:'good', handler: () => {}, id: 4 },
        { text: '128525', label:'perfect', handler: () => {}, id: 5 },
    ];

    const optionsMarkup = options.map((option: any) => (
        <button
            className='feedback-option-button'
            key={option.id}
            onClick={option.handler}
        >
            <span role="img" style={{fontSize: '1rem'}}>{String.fromCodePoint(option.text)}</span>
        </button>
    ));
    
    return <div className='feedback-options-container'>{optionsMarkup}</div>;
};

export default FeedbackOptions;

