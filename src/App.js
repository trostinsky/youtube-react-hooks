import React, {Component} from 'react';
import './App.css';
import ActivateButton from "./components/button";
import User from "./components/user";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <User/>
                    <ActivateButton/>
                </header>
            </div>
        );
    }
}

export default App;
