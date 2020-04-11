import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100")
            .then(res => res.json())
            .then(res => console.log(res))
    }

    render() {
        return <div className="container">
            <div>replacement header</div>
            <div>replacement pokemon list</div>
            <div>replacement footer</div>
        </div>
    }
}


ReactDOM.render(<App />, document.getElementById("root"))