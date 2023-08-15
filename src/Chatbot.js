// src/Chatbot.js

import React, { useState } from 'react';
import { ChatFeed, Message, Chatbot as ReactChatbot } from 'react-chatbot-kit'; // Rename 'Chatbot' to 'ReactChatbot'
// import Chatbot from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { updateUserInformation } from './redux/actions';
import { useNavigate } from 'react-router-dom';

const ChatbotPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  // Define chatbot messages
  const initialMessages = [
    {
      id: 1,
      message: 'Hello, Welcome to the student info system!',
      trigger: '2',
    },
    {
      id: 2,
      options: [
        {
          value: 'got_it',
          label: 'Got it!',
          trigger: '3',
        },
      ],
    },
  ];

  // Handle user message submission
  const handleUserMessage = (messageText) => {
    // Update the chat messages
    setMessages((prevMessages) => [...prevMessages, { text: messageText, type: 'user' }]);

    // Handle message processing here based on your chatbot logic

    // Example: Process user's name
    if (messageText.toLowerCase() === 'got it!') {
      setMessages((prevMessages) => [...prevMessages, { text: 'Enter your Name', type: 'bot' }]);
    } else if (messages.length === 2) {
      // Example: Process user's age
      // Update Redux state with user information
      dispatch(updateUserInformation({ name: messages[1].text, age: messageText }));

      // Add a thank you message
      setMessages((prevMessages) => [...prevMessages, { text: 'Thank you. In 5 seconds, bot will exit', type: 'bot' }]);

      // Implement a timer to navigate to the next page
      setTimeout(() => {
        navigate.push('/confirmation'); // Navigate to Page 3 using React Router
      }, 5000);
    }
  };


//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <ChatFeed
//         messages={messages.map((message, index) => (
//           <Message key={index} message={message} />
//         ))}
//         showSenderName
//       />
//       <Chatbot
//         config={{/* Your chatbot configuration options */}}
//         messageParser={{/* Your message parsing logic */}}
//         actionProvider={{/* Your action provider */}}
//         handleNewUserMessage={handleUserMessage}
//       />
//     </div>
//   );
// };

// export default ChatbotPage;
return (
    <div className="bg-gray-100 p-4">
      <ChatFeed
        messages={messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        showSenderName
      />
      <ReactChatbot
        // config={{/* Your chatbot configuration options */}}
        config={{
            initialMessages, // Pass the initialMessages array here
            /* Your other chatbot configuration options */
          }}
        messageParser={{/* Your message parsing logic */}}
        actionProvider={{/* Your action provider */}}
        handleNewUserMessage={handleUserMessage}
      />
    </div>
  );
};

export default ChatbotPage;