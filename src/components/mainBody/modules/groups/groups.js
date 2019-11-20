import React from 'react';
import TablePart from './Table/table'
import UpperBar from './TopBar/Topbar'

const MainPage = () => {


    const getMainData = () => {
        fetch('https://aubank-dev.loktra.com/api/v1/telecaller/groups?page=1&offset=30',{
            headers:{ 'Content-Type':  'application/json',
             'id':'0b98ff64-4669-4444-9356-0e038d2aaff3',
             'token':'17625384-a0b0-4930-8822-45e8005cc17d',
              'source':'desktop-dashboard'}
        }).then(response=>{
            console.log("this is the response of the main API",response);
        }).catch(error => {
            console.log("Error has been found",error)
        })
    }
    getMainData();
    return (<div>
        <UpperBar/>
        <TablePart/>
    </div>
        )
}

export default MainPage;