import React from 'react';
import ReactDOM from 'react-dom';

function Table() {
    return (
        <table>
            <tbody>
                <trs>
                    <tds>1</tds>
                    <tds>2</tds>
                    <tds>3</tds>
                </trs>

            </tbody>
        </table>
    )
}


ReactDOM.render(
    <Table/>,
    document.querySelector('#root')
)