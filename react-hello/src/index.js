//import statements are ES6 feature will always be at top of ever
import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return <span>Hello</span>;
}

function World() {
    return <span>World</span>;
}
//when removing paranthesis opening tag must be on same line as return
function HelloWorld(){
    return(
        <div>
            <Hello/> <World/>!
        </div>
    );
}

//fragment helps to produce valid HTML and keep DOM structure
// <> </> prefered way to write fragments 

function NameCells() {
    return (
        <React.Fragment>            
            <td>First Name</td>
            <td>Last Name </td>
        </React.Fragment>
    );
}

//ternary operator
function ValidIndicator() {
    const isValid = true;
    return <span>{isValid ? 'valid' : 'not valid'}</span>
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);

ReactDOM.render(
    <NameCells/>,
    document.querySelector('#root')
);

ReactDOM.render(
    <ValidIndicator/>,
    document.querySelector('#root')
);