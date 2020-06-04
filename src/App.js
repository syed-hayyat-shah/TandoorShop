import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table} from 'react-bootstrap';
import Navbar from './component/Navbar';
import Coursel from './component/Coursel';
import Card from './component/Card';
import Footer from './component/Footer';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Coursel />
      <Card />
      <Contact />
      <Footer />

    </>
   
  );
}


export default App;
