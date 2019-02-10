import React from "react";
import NavBar from './NavBar';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import CreatePlant from './CreatePlant';
import PlantView from "./PlantView";
import PlantNotes from "./PlantNotes";
import EditPlant from './EditPlant';

class App extends React.Component {
    

    render() {

        return (
        
            <div className="ui container">
                <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/create" exact component={CreatePlant} />
                    <Route path="/view/:id" exact component={PlantView} />
                    <Route path="/notes" exact component={PlantNotes} />
                    <Route path="/edit/:id" exact component={EditPlant} />

                </div>
                </BrowserRouter>
                
               
            </div>
           
        );
    }
}

export default App;