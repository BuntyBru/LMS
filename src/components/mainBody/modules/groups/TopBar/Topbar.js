import React,{useState, useRef} from 'react';
import './Topbar.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
   
    textField: {
      width: 200,
      margin:0,
      padding:0
    },
    button: {
        margin: theme.spacing(1),
        background:'#244093',
        textTransform:'capitalize',
        fontFamilt:'Ubuntu',
        fontWeight:600
      },
      input: {
        display: 'none',
      },
  }));
  

const Topbar = (props) => {
    const [filteredName,setFilteredName] = useState('');
    const classes = useStyles();

   const inputRef = useRef();

   const checkingRef =() =>{
     console.log("this is the value of input",inputRef.current.value);
       }

return (<div className='container'>
    <div className='row'>
    <div className='col-lg-2 col-sm-2 col-md-2 col-xs-2 totalCount'>
    <span onClick={props.clicked}>Total Count : {props.dataCount}</span>

    </div>
    <div className='col-lg-10 col-sm-10 col-md-10 col-xs-10 searchBar'>
    <form className={classes.container} noValidate autoComplete="off">
      <div>
       
        <input type='text' value={filteredName}
          onChange={(event)=>setFilteredName(event.target.value)} className={classes.textField} ref={inputRef}/>
        <Button variant="contained" color="primary" className={classes.button} onClick={checkingRef}>
        Search
      </Button>

      </div>
      </form>

    </div>
    

        </div>
        
        
    </div>)
}

export default Topbar;
