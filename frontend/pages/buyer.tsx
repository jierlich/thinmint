   
import React from 'react';
import Link from 'next/link'

interface Props {
    title?: string;
    tokenid?: string;
}

function BuyerPage(props: Props) {
    return (
    	<div>
    	<p>Should render the title {props.title}</p> 
    		<Link href="/buyer/[tokenid]" as={`/buyer/${props.tokenid}`}> 
    			<a>Let's Pretend this is a derivative: {props.tokenid} </a>
    		</Link>
    	</div>
    	);
}

export const getServerSideProps = async () => {
    return {
        props: {
            title: 'Buy Cookies',
            tokenid: '123',
        },
    };
};

export default BuyerPage;