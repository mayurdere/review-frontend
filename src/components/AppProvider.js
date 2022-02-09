import React, { Component } from 'react';
import AppContext from '../context/AppContext'
// import axios from 'axios'


const token = localStorage.getItem('token')
// console.log('token', token)
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roles: {
        admin: false,
        employee: false
      },
      isLogin: false,
      loginError: null,
      loginData: {
        token: null,
      },
      start: false,
      claims: [],
      userInfo: {
        salary: 300000,
        age: null,
        ageInDifferentForm: null,
        name: null,
        city: 'Metro',
        gender: ''
      },
      userForm: {
        add: 0,
        edit: 0
      }
    }
  }

  
  render() {
    return (
      <div className="app-provider">
        <AppContext.Provider value={{
          state: this.state,
        }}>
          {this.props.children}
        </AppContext.Provider>
      </div>
    );
  }
}

export default AppProvider;