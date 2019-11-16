import React ,{useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar/navbarComp';
import Mainbody from './components/mainBody/mainBody';




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
    <div className="App">
     <Navbar slider = {showPanel} />
     <Mainbody sliderStatus ={nav} />
    </div>
  );
}

export default App;
