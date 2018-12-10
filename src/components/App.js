import React, { Component } from 'react';
import Navigation from './Navigation';
import Featured from './Featured';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Featured />
            </div>
        )
    }
}

export default App;