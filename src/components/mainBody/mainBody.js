import React from 'react';
import Sidebar from '../sidebar/sidebar';
import MainPage from './modules/groups/groups';
import './mainBody.css';


const MainBody = (props) =>{
    let sidePanel;
    let mainPanel = 'col-lg-12 col-sm-12 col-xs-12 col-md-12';
    
    if(props.sliderStatus.show == false)
    {
        console.log("Side Menu should not be shown");
        sidePanel = <div className='nothing'></div>;
        mainPanel = 'col-lg-12 col-sm-12 col-xs-12 col-md-12 mainBarPart';
    }
    else
    {  
        sidePanel = <div className='col-lg-2 col-sm-2 col-xs-2 col-md-2 sideBarpart'>
                    <Sidebar/>
                    </div> ;
        mainPanel = 'col-lg-10 col-sm-10 col-xs-10 col-md-10 mainBarPart'
    }
    
    return (
        <div className='container'>
        <div className='row mainContainerRow '>
        {sidePanel}
        <div className={mainPanel}> <MainPage/>  </div>
        </div>
        </div>
    )
}

export default MainBody;