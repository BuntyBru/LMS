import React, {useEffect,useState, Suspense} from 'react';
import TablePart from './Table/table'
import UpperBar from './TopBar/Topbar'
import axios from 'axios';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import GroupDetail from './groupDetail/groupDetail';
import * as actionCreators from '../../../../store/actions/actions';
import {useSelector} from 'react-redux';


const LazyRouterGroupForm =  React.lazy(()=>import ('./groupForms/groupForm'));


const MainPage = (props) => {
    const [auth,setAuth] = useState(true);
   // const groupData2 = useSelector(state => state.groupData);

    useEffect(
          (()=>{
            props.OnTableDataFetch();
            console.log("This will run");
          }),[]

    )

    
    
    return (<div>
       <Switch>
       <Route path="/" exact render= {()=><div>
            <UpperBar   dataCount = {props.ctr}  />
        <TablePart tableData = {props.groupData}/>
            </div>}/>

            {auth ? <Route path="/add-group" exact render={() => <Suspense fallback={<div>Loading............</div>}
            ><LazyRouterGroupForm/></Suspense>}/> : null }
             <Route path="/groups/:id" exact component={GroupDetail}/>
             <Route render={()=><h1>Not found</h1>}/>
           </Switch>
        
    </div>
        )
}

const mapStateToProps = (state) => {

    return {   
        ctr:state.ctr,
        groupData:state.groupData
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
      
        OnTableDataFetch:()=>dispatch(actionCreators.asyncTableData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);