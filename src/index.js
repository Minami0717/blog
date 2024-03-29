import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './study/chapter_03/Library';
import Clock from './study/chapter_04/Clock';
import CommentList from './study/chapter_05/CommentList';
import NotificationList from './study/chapter_06/NotificationList';
import Accommodate from './study/chapter_07/Accommodate';
import ConfirmButton from './study/chapter_08/ConfirmButton';
import LandingPage from './study/chapter_09/LandingPage';
import AttendanceBook from './study/chapter_10/AttendanceBook';
import SignUp from './study/chapter_11/SignUp';
import Calculator from './study/chapter_12/Calculator';
import ProfileCard from './study/chapter_13/ProfileCard';
import DarkOrLight from './study/chapter_14/DarkOrLight';
import MainPage from './test/MainPage';
import Blocks from './study/chapter_15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();