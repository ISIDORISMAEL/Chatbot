import 'react-chatbot-kit/build/main.css'
import Chatbot from 'react-chatbot-kit'
import config from '../bot/config.js';
import MessageParser from '../bot/Messageparser.js';
import ActionProvider from '../bot/ActionProvider.js';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        MessageParser={MessageParser}
        ActionProvider={ActionProvider}
      />
    </div>
  );
};