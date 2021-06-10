import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Movies from "./components/Movies";
import MyNav from "./components/MyNav";
import ShowDetail from './components/ShowDetail'

const App = ()=> {

  const [search, setSearch] = useState('')

  const newSearch = (data) =>{
    setSearch(data)
  }

  return (
    <>

    <Router>
    <MyNav searchValue={newSearch}/>
    <Header/>
    <Container fluid>
    <Route path="/" exact render={(routerProps)=> <Movies {...routerProps} id='harry-potter' movieName={search?search:'harry%20potter'} movieTitle={search?search:'Harry Potter'}/>}/>
      {search?'':
      <>
      <Route path="/" exact render={(routerProps)=><Movies {...routerProps} id='lotr' movieName='Lord+of+the+rings' movieTitle='Lord of the Rings'/> }/>
      <Route path="/" exact render={(routerProps)=> <Movies {...routerProps} id='batman' movieName='Batman' movieTitle='Batman'/> }/>
      <Route path="/" exact render={(routerProps)=> <Movies {...routerProps} id='avengers' movieName='Avengers' movieTitle='Avengers'/>}/>
      </>
      }
      
    </Container> 
    <Route path="/details/:movieID" render={(routerProps) => <ShowDetail {...routerProps} title="hello"/>}/>
    </Router>
     
    </>
  )
}

export default App;
