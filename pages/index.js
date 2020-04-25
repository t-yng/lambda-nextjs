import React from 'react';

const IndexPage = (props) => {
    return (
        <>
            <div>Hello {props.name}</div>
            <div><a href="/dev/counter">カウントをしたい</a></div>
        </>
    );
}

IndexPage.getInitialProps = () => {
    return {
        name: 'Taro'
    }
}

export default IndexPage;
