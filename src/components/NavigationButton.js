import React from 'react';

const NavigationButton = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

export default NavigationButton;
