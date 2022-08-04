import React from 'react';

import "./FeedbackOptions.css";

// available options for the customer
const FeedbackOptions = (props: any) => {

    // TODO
    // handle the selected option
    const optionHandler = (optionText: string) => {
        console.log('selected: ', optionText);
    }

    const options = [
        { text: '129326', label:'terrible', handler: optionHandler, id: 1 },
        { text: '128078', label:'bad', handler: optionHandler, id: 2 },
        { text: '128528', label:'ok', handler: optionHandler, id: 3 },
        { text: '128077', label:'good', handler: optionHandler, id: 4 },
        { text: '128525', label:'perfect', handler: optionHandler, id: 5 },
    ];

    const optionsMarkup = options.map((option: any) => (
        <button
            className='feedback-option-button'
            key={option.id}
            onClick={option.handler}
        >
            {String.fromCodePoint(option.text)}   
        </button>
    ));
    
    return <div className='feedback-options-container'>{optionsMarkup}</div>;
};

export default FeedbackOptions;

