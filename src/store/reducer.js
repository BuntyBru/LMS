const initalState = {
    ctr:22
}

const reducer = (state=initalState,action) => {

    if(action.type == 'INC')
    {
        console.log("INCREASE INCREASE INCREASE");
    }

    return state;
};


export default reducer;
