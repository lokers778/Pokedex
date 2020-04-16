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
            pokemonAmount: 0,
            typeList: null,
            pokemonList: null,
            pageNumber: 0,
            pokemonDetailedList:null,
        }
        updatePokemonList = (pokemonList,pokemonAmount) => {
            this.setState({pokemonList: pokemonList ,pokemonAmount:pokemonAmount})
        }
        updatePokemonDetailedList = (pokemonDetailedList) => {
            this.setState({pokemonDetailedList:pokemonDetailedList})
        }
    generateType = (res) => {
        this.setState({ typeList: res.results})
    }
    generatePokemonList = (res) => {
        this.setState({ pokemonAmount: res.count,pokemonList:res.results,})
    }
    componentDidMount = () => {
       fetchData(this.generatePokemonList, "pokemon/?limit=200&offset=0");
        fetchData(this.generateType, "type");
    }
    componentDidUpdate(prevProps,prevState) {
        if (prevState.pokemonAmount !== this.state.pokemonAmount) {
            this.setState({ pageNumber: Math.ceil(this.state.pokemonAmount/200) })
        }
    }

    render() {
        return (
            <section className="container">
                <Header />
                <FilterBar  typeList={this.state.typeList} updatePokemonList={this.updatePokemonList} pokemonList={this.state.pokemonList} pokemonAmount={this.state.pokemonAmount} updatePokemonList={this.updatePokemonList} pokemonDetailedList={this.state.pokemonDetailedList} updatePokemonDetailedList={this.updatePokemonDetailedList}  />
                <PokemonList pokemonAmount={this.state.pokemonAmount} pokemonList={this.state.pokemonList} pageNumber={this.state.pageNumber} updatePokemonList={this.updatePokemonList} pokemonDetailedList={this.state.pokemonDetailedList} updatePokemonDetailedList={this.updatePokemonDetailedList}/>
                <Footer />
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))