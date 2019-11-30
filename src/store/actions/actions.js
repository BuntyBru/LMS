export const INCREMENT = 'INCREMENT';
export const SET_TABLEDATA = 'SET-TABLEDATA';


export const increment = () => {
    return {
        type:INCREMENT
    };
};

export const setTableData = (tdata) => {
    return {
        type:SET_TABLEDATA,
        data:tdata
    }
}

export const asyncTableData = () => {
    return dispatch => {
        fetch('https://lmsys-91d82.firebaseio.com/data.json',{
                headers:{'Content-Type':'application/json'}
            }).then(response => {
            return response.json();
        }).then(response=>{
                console.log("this is the response of the main API Actions.js",response);
                dispatch(setTableData(response))
            }).catch(error => {
                console.log("Error has been found",error)
            })
    };
};