import React from "react";
import NavBar from './NavBar';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import CreatePlant from './CreatePlant';

class App extends React.Component {
    render() {

        return (
            
            <div className="ui container">
                <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/create" exact component={CreatePlant} />

                </div>
                </BrowserRouter>
                
               
            </div>
        );
    }
}

export default App;