import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/header"
import PokemonList from "./Components/pokemonList"
import Footer from "./Components/footer";
//import Footer from "./Components/footer"
class App extends React.Component {

    fetchData() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100")
            .then(res => res.json())
            .then(res => console.log(res))
    }
    componentDidMount() {
       // this.fetchData()
    }

    render() {
        return( <div className="container">
            <Header/>
            <div>replacement filter</div>
            <PokemonList/>
            <Footer/>
        </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))