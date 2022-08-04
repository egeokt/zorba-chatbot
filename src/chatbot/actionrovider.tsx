import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }:any) => {
     const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev: any) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleFeedback = (feedback: string) => {
        const analytics = {
            feedback, // alternatively send a number from 1 to 5 here
            category: 'what is the feeback about',
            date: new Date(),
            user: 'send user details here',
            feedback_source: 'maybe we are getting the same feedback with different sources',
            labels: [
                // as many as a client want
                // need to double check analytics and performance requirements for the request size
                {
                    key: 'key of the label',
                    value: 'give a meaningful value',
                    description: 'customize fields for v1, so that we can improve with what is needed'
                }
            ]
        };

        let chatBotResponse = '';
        // TODO
        try {
            // send the analytics to the server
            // and perhaps get back the response
            
        }
        catch (err) {
            // handle error
        }

        // send the response you got above to the user
        updateChatbotState(chatBotResponse);
    }

    const updateChatbotState = (message: string) => {
        setState((prevState: any) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }


    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
                handleHello,
                handleFeedback
            },
          });
        })}
      </div>
    );
  };
  
  export default ActionProvider;