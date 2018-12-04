import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ActivateButton from "./components/button";
import User from "./components/user";

class App extends Component {
    onChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <User />
                    <ActivateButton/>
                </header>
            </div>
        );
    }
}

export default App;
