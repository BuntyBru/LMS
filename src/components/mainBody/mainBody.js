import React from 'react';
import Sidebar from '../sidebar/sidebar';
import './mainBody.css';


const MainBody = () =>{

    return (
        <div className='container'>
        <div className='row mainContainerRow '>
        <div className='col-lg-2 col-sm-2 col-xs-2 col-md-2 sideBarpart'>

        <Sidebar/>

        </div>
        <div className='col-lg-10 col-sm-10 col-xs-10 col-md-10'>
        
        </div>

        </div>

        </div>
    )
}

export default MainBody;