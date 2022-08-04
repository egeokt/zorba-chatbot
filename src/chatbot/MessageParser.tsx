import React from 'react';

const MessageParser = ({ children, actions }:any) => {
  const parse = (message:string) => {
      if (message.includes('hello')) {
          actions.handleHello();
      }
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;