import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function AddressLabel({ person }) {
  return (
    
    <>
      <ol className="person">
        <li className="full-name">{person.fullName}</li>
        <li className="address">{person.address}</li>
        <li className="state-city-zip">{person.cityStateZip}</li>
      </ol>
    </>
  );
  const fromPerson = {
    fullName: 'Julian Perge',
    address: '123 Blank Street',
    cityStateZip: 'Columbus, OH 43203',
  };
}

AddressLabel.propTypes = {
  person: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    cityStateZip: PropTypes.string.isRequired
  }).isRequired
};

function Envelope({fromPerson,toPerson}) {
  return (
    <main className="envelope">
      <section className="fromPerson">
        <AddressLabel person= {fromPerson}/>
      </section>
      <section className="toPerson">
        <AddressLabel person={toPerson}/>
      </section>
    </main>
  );
}



const toPerson = {
  fullName: 'Perge Julian',
  address: '321 Blank Street',
  cityStateZip: 'San Francisco, CA 43204',
};

ReactDOM.render(
  // <AddressLabel />,
  <Envelope/>,
  document.querySelector('#root')
);

