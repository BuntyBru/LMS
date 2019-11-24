import React from 'react';

const GroupDetail = (props) => {
    console.log("Props from the ", props.match.params)
    return (<div>
        This is the detail page for single groups;
    </div>)
}

export default GroupDetail;