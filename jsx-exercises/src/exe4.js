import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return <h1>Hello, username !</h1>;
}

function GuestGreeting(props) {
    return <h1>Not logged in </h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
);