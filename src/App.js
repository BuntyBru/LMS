import React ,{useState} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar/navbarComp';
import Mainbody from './components/mainBody/mainBody';

import { BrowserRouter} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  button: {
    color:'bisque',
    fontFamily: 'Josefin Sans',
    fontSize:'20px',
    textTransform:'lowercase'
  }
}));


function App() {
  const classes = useStyles();
  //My state
  const [nav,setNav] =useState({
    show:false
  }); 

  const showPanel =() => {
    let t = nav.show;
    setNav({
      show:!t
    });
  }

  return (
    <BrowserRouter basename="/application">
     <div className="App">
    <Navbar slider = {showPanel} /> 
    <Mainbody sliderStatus ={nav} />
   </div>
    </BrowserRouter>
   
  );
}

export default App;
