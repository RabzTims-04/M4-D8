import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Movies from "./components/Movies";
import MyNav from "./components/MyNav";

const App = ()=> {

  const [search, setSearch] = useState('')

  const newSearch = (data) =>{
    setSearch(data)
  }

  return (
    <>

    <MyNav searchValue={newSearch}/>
    <Header/>
    <Container fluid>
      <Movies id='harry-potter' movieName={search?search:'harry%20potter'} movieTitle={search?search:'Harry Potter'}/>
      {search?'':
      <>
      <Movies id='lotr' movieName='Lord+of+the+rings' movieTitle='Lord of the Rings'/>
      <Movies id='batman' movieName='Batman' movieTitle='Batman'/>
      <Movies id='avengers' movieName='Avengers' movieTitle='Avengers'/>
      </>
      }
      
    </Container>  
    </>
  )
}

export default App;
