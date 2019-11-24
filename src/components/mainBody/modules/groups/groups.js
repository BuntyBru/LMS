import React, {useEffect,useState, Suspense} from 'react';
import TablePart from './Table/table'
import UpperBar from './TopBar/Topbar'
import axios from 'axios';
import {Route, Switch, Redirect} from 'react-router-dom';

import GroupDetail from './groupDetail/groupDetail';


const LazyRouterGroupForm =  React.lazy(()=>import ('./groupForms/groupForm'));


const MainPage = (props) => {

    const [groupData, setGroupData] = useState([]);
    const [groupCount,setGroupCount] =useState();
    const [auth,setAuth] = useState(true);
   

    useEffect(
          (() => {
            fetch('https://lmsys-91d82.firebaseio.com/data.json',{
                headers:{'Content-Type':'application/json'}
            }).then(response => {
            return response.json();
        }).then(response=>{
                console.log("this is the response of the main API",response);
                let groupCount = response.groups_count;
                setGroupCount(groupCount);
                const allgroups = [];
                for(let i in response.groups)
                {
                    allgroups.push({
                        name : response.groups[i].group_name,
                        channels:response.groups[i].lead_sources_count,
                        products:response.groups[i].display_products_count,
                        pincodes_count:response.groups[i].pincodes_count,
                        employees_count:response.groups[i].primary_group_members_count + response.groups[i].secondary_group_members_count
                    });
                }
                setGroupData(allgroups);
                
                
            }).catch(error => {
                console.log("Error has been found",error)
            })
        
        }),[]

    )

    console.log("this is groupData",groupData);
    console.log("============>",props)

    
    
    return (<div>
       <Switch>
       <Route path="/" exact render= {()=><div>
            <UpperBar   dataCount = {groupCount}  settingData ={setGroupData}/>
        <TablePart tableData = {groupData}/>
            </div>}/>

            {auth ? <Route path="/add-group" exact render={() => <Suspense fallback={<div>Loading............</div>}
            ><LazyRouterGroupForm/></Suspense>}/> : null }
             <Route path="/groups/:id" exact component={GroupDetail}/>
             <Route render={()=><h1>Not found</h1>}/>
           </Switch>
        
    </div>
        )
}

export default MainPage;