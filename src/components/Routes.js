import React from 'react'
import '../styles/App.css';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddAnswer from './AddAnswer';
import AddQuestion from './AddQuestion';
import Header from './Header';
import Login from './Login';
import Register from './Register';


const Routes = () => {

    return (
        <Router>
            <div className='routes'>
                <Header />
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/AddQuestion" component={AddQuestion} />
                    <Route path="/AddAnswer" component={AddAnswer} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Register" component={Register} />

                </Switch>
            </div>
        </Router>
    )
}
export default Routes;
