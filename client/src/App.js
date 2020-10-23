import React from 'react';

import Join from './component/Join';
import Chat from './component/Chat';

import { BrowserRouter as Router , Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    )
};
export default App;