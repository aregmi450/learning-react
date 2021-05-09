import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function CreditCard({ cardInfo }) {
    return (
        <div className="creditcard">
            <div className="bank={name}">
                <Bank />
            </div>

            <div className="valid">
                <Date />
                <div className="card-number">
                    <CardExpiration />

                    <div className="name">
                        <Name />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Name() {
    return (
        <div className="name">
            CARDHOLDER NAME
        </div>
    );
}

function Date() {
    return (
        <div className="valid">
            VALID TILL: 08/22
        </div>
    );
}

function CardExpiration({ expirationDate }) {
    return (
        <span className="expiration">
            <p className="expValid">VALID</p>
            <p className="expThru">THRU</p>
            <p className="expDate">{expirationDate}</p>
        </span>
    );
}
function Bank({ name }) {
    return (
        <strong className="bank">
            Big Bank, Inc.
        </strong>
    );
}





ReactDOM.render(
    <CreditCard />,
    document.querySelector('#root')
);

