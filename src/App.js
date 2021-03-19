import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Header from './components/Header';
import EditHotel from './components/hotel/EditHotel';
import Hotels from './components/hotel/Hotels';
import NewHotel from './components/hotel/NewHotel';


function App() {
    return (
        <Router>
            <Header />
                <div className="container mt-5">
                    <Switch>
                        <Route exact path="/" component={Hotels} />
                        <Route exact path="/create" component={NewHotel} />
                        <Route exact path="/edit/:id" component={EditHotel} />
                    </Switch>
                </div>
        </Router>
        
    );
}

export default App;
