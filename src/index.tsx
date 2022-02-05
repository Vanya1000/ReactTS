import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let a: number | null = 12;
a = null

let sex: 'male' | 'female';//фиксация


let names: Array<string> = ['qwe', 'qwe', 'wer'];
let names2: string[] = ['qwe', 'qwe', 'wer'];
names.forEach(n => {
  console.log(n.length);
})

type AddressType = {
  city: string
  country: string
}

type UserType = {
  sayHello: (message: string) => void
  name: string
  age: number
  isLearning: boolean
  address: AddressType | null
}

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isLearning: null as boolean | null,
  address: {
    city: 'Minsk',
    country: 'Belarus'
  } as AddressType
}

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
  address: {
    city: 'Indiapolis',
    country: 'USA'
  },
  isLearning: true,
  age: 34,
  name: 'qwerty'
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
