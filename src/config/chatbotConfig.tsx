import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "../chatbot/ActionProvider";

import FeedbackOptions from "../chatbot/components/FeedbackOptions/FeedbackOptions";

const config = {
    botName: "Zorba Chatbot",
    initialMessages: [
        createChatBotMessage('How was your experience with us today?', {
            widget: "feedbackOptions"
        })
    ],
    customStyles: {
        botMessageBox: {
          backgroundColor: "#376B7E",
        },
        chatButton: {
          backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "feedbackOptions",
            widgetFunc: (props: any) => <FeedbackOptions { ...props } />,
            props: {
                actionProvider: ActionProvider,
            },
            mapStateToProps: [],
        },
    ]
}

export default config;