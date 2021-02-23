import React from 'react';

const Home = () => {

    function getUser() {
        const userString = localStorage.getItem('user');
        return JSON.parse(userString);
    }
    const {name, age, email} = getUser();

    return (
        <div>
            <h1>Home</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Home;