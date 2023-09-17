import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

reportWebVitals();
