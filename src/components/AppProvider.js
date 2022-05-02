import React, { Component } from 'react';
import { useState } from 'react';
import AppContext from '../context/AppContext'
// import axios from 'axios'


const token = localStorage.getItem('token')
// console.log('token', token)
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


const AppProvider = (props) => {
const [email, setEmail] = useState('')
const [name, setName] = useState('Yolo')
const [currentTheme, setCurrentTheme] = useState('light')

const themeName = localStorage.getItem("theme");
console.log(themeName, 'appPr')

  return (
    <div className="app-provider">
        <AppContext.Provider value={{ name: [name, setName], email: [email, setEmail], currentTheme: [currentTheme, setCurrentTheme] }}>
          {props.children}
        </AppContext.Provider>
      </div>
  )
}

export default AppProvider

