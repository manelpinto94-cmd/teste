import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PlannerPage from './pages/Planner';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/planner" component={PlannerPage} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));