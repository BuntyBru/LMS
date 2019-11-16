import React from 'react';
import Sidebar from '../sidebar/sidebar';
import './mainBody.css';


const MainBody = (props) =>{
    let sidePanel;
    let mainPanel = <div className='col-lg-12 col-sm-12 col-xs-12 col-md-12'> </div>
    
    if(props.sliderStatus.show == false)
    {
        console.log("Side Menu should not be shown");
        sidePanel = '';
        mainPanel = <div className='col-lg-12 col-sm-12 col-xs-12 col-md-12'> </div>   
    }
    else
    {  
        sidePanel = <div className='col-lg-2 col-sm-2 col-xs-2 col-md-2 sideBarpart'>
                    <Sidebar/>
                    </div> ;
        mainPanel = <div className='col-lg-10 col-sm-10 col-xs-10 col-md-10'> </div>
    }
    
    return (
        <div className='container'>
        <div className='row mainContainerRow '>
        {sidePanel}
        {mainPanel}
        </div>
        </div>
    )
}

export default MainBody;