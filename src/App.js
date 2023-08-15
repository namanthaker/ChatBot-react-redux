import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Page1 from './Page1';
import ChatbotPage from './Chatbot';
import Page3 from './Page3';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/confirmation" element={<Page3 />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
