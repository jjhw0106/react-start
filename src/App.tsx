import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props: any) {
  return <header>
    <h1><a href='/' onClick={function(event) {
      event.preventDefault();
      props.onChangedMode();
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
function Nav({topics, thre: sentence, onChangedMode}: TopicProps) {
  return <nav>
    <p>{sentence}</p>
    <ol>
      {
        topics.map((prop)=>(
          <li><a href='/' onClick={(event)=>{
            event.preventDefault();
            onChangedMode(prop.id)
          }}>{prop.id}</a></li>
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

function Create() {
  return <form>
    <p><input></input></p>
    <p><textarea></textarea></p>
    <p><input type='submit'></input></p>
  </form>
}

function App() {
  /* _mode[0]은 초깃값, mode[1]은 값을 변경시키는 함수 */
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // 축약형
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState<null|number>(null);
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'script', body:'script is...'},
  ];
  const topic = topics.find(topic => topic.id === id);

  let content = null;
  if (mode === 'WELCOME') {
      content = <Article title = "Welcome" body="Hello, WEB"></Article>
    } else if (mode === 'READ') {
      content = <Article title={topic?.title} body="Hello, Read"></Article>
    }
    
    return (
      <div>
      <Header title="REACT" onChangedMode={()=>{
        setMode("WELCOME");
      }}>
      </Header>
      <Nav topics={topics} thre="ffdf" onChangedMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <Create></Create>
    </div>
  );
}

export default App;
