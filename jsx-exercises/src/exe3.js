import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
    return (React.createElement('div', { className: 'book' },
        React.createElement('div', {}, 'The Title'),
        React.createElement('div', {}, 'The Author'),
        React.createElement('ul', { className: 'stats' },),
        React.createElement('li', { className: 'rating' }, '5 Stars'),
        React.createElement('li', { className: 'isbn' }, '12-345678-910'),
    )
    );
}

ReactDOM.render(
    <MyThing />,
    document.querySelector('#root')
);