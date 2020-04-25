import React from 'react';

const CounterPage = (props) => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <>
            <div>Let's Count</div>
            <div>カウント: {count}</div>
            <button onClick={handleClick}>カウント</button>
        </>
    );
}

export default CounterPage;
