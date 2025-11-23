import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Planner App</h1>
            <p>Your personal planner to manage tasks and events.</p>
            <Link to="/planner">Go to Planner</Link>
        </div>
    );
};

export default Home;