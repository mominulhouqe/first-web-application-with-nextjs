import React from 'react';



const DynamicPage = ({params,searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            DynamicPage number {params.productid}
    
        </div>
    );
};

export default DynamicPage;