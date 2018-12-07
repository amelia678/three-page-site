import React, {Component} from 'react';
import NavBar from './NavBar';
import Content from './Content';


class Webpage extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
        <NavBar />

        < Content />
        
        </div>
        );
    }
}

export default Webpage;