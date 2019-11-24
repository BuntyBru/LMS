import React from 'react';
import Paper from '@material-ui/core/Paper';
import './groupForm.css';



const formPack = (props) =>{

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
        <input/> </div>)
    }

    
    
    return ( <Paper className='paperPart'>
        <div className='container'>
        
        <form>
        <div className='row'>
        
        {mainForm}
        </div>
            
        </form>
        

        </div>

      </Paper>)
}

export default formPack;