import React from "react";
import NavBar from './NavBar';

import Home from './Home';

class App extends React.Component {
    render() {

        return (
            
            <div className="ui container">
                <NavBar />
                
                <Home />
            </div>
        );
    }
}

export default App;