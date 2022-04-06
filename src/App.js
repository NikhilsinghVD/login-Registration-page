import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Login from './component/Login/Login';
import Register from './component/Register/Register'; 

function App(){
    return(
        <div className='App'>
            <Router>
                <Switch>
                    <Route path="/" exact>
                       <Login/> 
                    </Route>
                    <Route path="/Register">
                        <Register/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;