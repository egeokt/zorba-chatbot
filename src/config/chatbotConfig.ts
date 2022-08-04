import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Zorba Chatbot",
    initialMessages: [createChatBotMessage('Hello', {})],
    customStyles: {
        botMessageBox: {
          backgroundColor: "#376B7E",
        },
        chatButton: {
          backgroundColor: "#376B7E",
        },
    }
}

export default config;