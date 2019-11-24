import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import './groupForm.css';
import Button from '@material-ui/core/Button';


const FormPack = (props) =>{

    const [formValue,setFormValue] = useState({
      
            group_name:{
                value:''
            },
            manager_name:{
                value:''
            },
            src_Channel:{
                value:''
            },
            product_name:{
                value:''
            },
            referee_branches:{
                value:''
            },
            cus_Pincode:{
                value:''
            },
            primary_emp:{
                value:''
            },
            secondary_emp:{
                value:''
            }

        });

    const changeHandler=(event) =>{
       
        let itemName = event.target.name;
        let itemAns = event.target.value;
        setFormValue({...formValue ,[itemName]:{value:itemAns}});
    }

    const formSubmit =() => {
        console.log("Form has been submitted",formValue);
        setFormValue({
      
            group_name:{
                value:''
            },
            manager_name:{
                value:''
            },
            src_Channel:{
                value:''
            },
            product_name:{
                value:''
            },
            referee_branches:{
                value:''
            },
            cus_Pincode:{
                value:''
            },
            primary_emp:{
                value:''
            },
            secondary_emp:{
                value:''
            }

        })
      
    }

    const formPart = [
        {
            label:'Group Name',
            id:'group_name',
            type:'text'
        },
        {
            label:'Manager Name',
            id:'manager_name',
            type:'text'
        },
        {
            label:'Source Channels',
            id:'src_Channel',
            type:'text'
        },
        {
            label:'Product',
            id:'product_name',
            type:'text'
        },
        {
            label:'Referee Branches',
            id:'referee_branches',
            type:'text'
        },
        {
            label:'Customer Pincode',
            id:'cus_Pincode',
            type:'text'
        },
        {
            label:'Primary Employees',
            id:'primary_emp',
            type:'text'
        },
        {
            label:'Secondary Employees',
            id:'secondary_emp',
            type:'text'
        },
        
    ];

    let mainForm = [];
    for (let i=0;i<formPart.length;i++)
    {
        mainForm.push(<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group' key={formPart[i].id}> 
        <label>{formPart[i].label}</label> 
        <input type='text' name={formPart[i].id} value={formValue[formPart[i].id].value}  onChange={ changeHandler} /> </div>)
    }

    
      
    
    
    return ( <Paper className='paperPart'>
        <div className='container'>
        
        <form >
        <div className='row'>
        
        {mainForm}
        </div>
        <Button variant="contained" type='button' color="primary" className='submitBtn'  onClick ={formSubmit}>
        Submit
      </Button>
            
        </form>
       
 

        </div>

      </Paper>)
}

export default FormPack;