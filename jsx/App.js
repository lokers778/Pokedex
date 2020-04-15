import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/header"
import PokemonList from "./Components/pokemonList"
import Footer from "./Components/footer";
import FilterBar from "./Components/filterbar"
import fetchData from "./helperFunctions/fetchDataFunction.js"

class App extends React.Component { 
        state = {
            fetchedDataAmount: false,
            pokemonAmount: 0,
            typeAmount: 0,
            pokemonList: [],
            pageNumber: 0,
        }
    generateType = (res) => {
        console.log(res);
        this.setState({ pokemonAmount: res.count })
    }
    generatePokemonList = (res) => {
        console.log(res);
        this.setState({ typeAmount: res.count })
    }
    componentDidMount = () => {
       fetchData(this.generatePokemonList, "pokemon/?limit=50&offset=0");
        fetchData(this.generateType, "type");
    }
    componentDidUpdate() {
        // console.log(this.state)
    }

    render() {
        return (
            <section className="container">
                <Header />
                <FilterBar fetchedData={this.state.fetchedDataAmount} typeAmount={this.state.typeAmount} />
                <PokemonList fetchedData={this.state.fetchedDataAmount} pokemonAmount={this.state.pokemonAmount} />
                <Footer />
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))