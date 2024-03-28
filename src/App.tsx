import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props: any) {
  return <header>
    <h1><a href='/' onClick={function(event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a> </h1>
  </header>
}

export interface Topic {
  id: number
  title: string
  body: string
}
interface TopicProps {
  topics: Topic[],
  thre: string,
  onChangedMode: (id: number) => void;
}
function Nav({topics, thre: sentence}: TopicProps) {
  return <nav>
    <p>{sentence}</p>
    <ol>
      {
        topics.map((prop)=>(
          <li><a href='/' onClick={()=>alert(prop.id)}>{prop.id}</a></li>
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
      <Header title="REACT" onChangeMode={
        ()=>alert("Header!!")
      }
      ></Header>
      <Nav topics={topics} thre="ffdf" onChangedMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello,Web"></Article>
    </div>
  );
}

export default App;
