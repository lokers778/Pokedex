import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/header"
import PokemonList from "./Components/pokemonList"
import Footer from "./Components/footer";
import FilterBar from "./Components/filterbar"
import fetchData from "./helperFunctions/fetchDataFunction.js"
import "../scss/main.scss"

class App extends React.Component { 
        state = {
            fetchedDataAmount: false,
            pokemonAmount: 0,
            typeList: null,
            pokemonList: null,
            pageNumber: 0,
        }
        updatePokemonList = pokemonList => {
            this.setState({pokemonList: pokemonList })
        }
    generateType = (res) => {
        this.setState({ typeList: res.results})
    }
    generatePokemonList = (res) => {
        console.log(res);
        this.setState({ pokemonAmount: res.count,pokemonList:res.results })
    }
    componentDidMount = () => {
       fetchData(this.generatePokemonList, "pokemon/?limit=&offset=0");
        fetchData(this.generateType, "type");
    }
    componentDidUpdate() {
        // console.log(this.state)
    }

    render() {
        console.log(this.state.pokemonList)
        return (
            <section className="container">
                <Header />
                <FilterBar fetchedData={this.state.fetchedDataAmount} typeList={this.state.typeList} updatePokemonList={this.updatePokemonList}/>
                <PokemonList fetchedData={this.state.fetchedDataAmount} pokemonAmount={this.state.pokemonAmount} pokemonList={this.state.pokemonList} />
                <Footer />
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))