   
import React from 'react';

interface Props {
    title?: string;
}

function BuyerPage(props: Props) {
    return (
    	<div>
    	<p>Should render the title {props.title}</p> 
    	</div>
    	);
}

export const getServerSideProps = async () => {
    return {
        props: {
            title: 'Buy Cookies',
            active: 'page1',
        },
    };
};

export default BuyerPage;