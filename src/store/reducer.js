import * as actionTypes from './actions/actions';

const initalState = {
    ctr:0,
    groupData:{}
}

const reducer = (state=initalState,action) => {

   switch(action.type)
   {
       case actionTypes.INCREMENT:
       const newState = Object.assign({}, state);
       newState.ctr = state.ctr + 1;
       return newState;

       case actionTypes.SET_TABLEDATA:
       console.log("Action.data is here ===>",action.data);
       const allgroups = [];
                for(let i in action.data.groups)
                {
                    allgroups.push({
                        name : action.data.groups[i].group_name,
                        channels:action.data.groups[i].lead_sources_count,
                        products:action.data.groups[i].display_products_count,
                        pincodes_count:action.data.groups[i].pincodes_count,
                        employees_count:action.data.groups[i].primary_group_members_count + action.data.groups[i].secondary_group_members_count
                    });
                }

        console.log("ALLGROUPS",allgroups);
       return {
           ...state,
           ctr:action.data.groups_count,
           groupData:allgroups
       }

       
   }

   return state;
};


export default reducer;
