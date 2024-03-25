import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props: any) {
  return <header>
    <h1><a href='/'>{props.title}</a> </h1>
  </header>
}

function Nav(props: Array<any>) {
  return <nav>
    <ol>
      {
        props.map((prop)=>(
          <li>{prop}</li>
        ))
      }
    </ol>
  </nav>
}

function Article(props: any) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'script', body:'script is...'},
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav contents={topics}></Nav>
      <Article title="Welcome" body="Hello,Web"></Article>
    </div>
  );
}

export default App;
