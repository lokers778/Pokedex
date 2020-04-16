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
            pageNumber:0,
        }
        updatePokemonList = (pokemonList,pokemonAmount) => {
            this.setState({pokemonList: pokemonList ,pokemonAmount:pokemonAmount})
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
                <FilterBar fetchedData={this.state.fetchedDataAmount} typeList={this.state.typeList} updatePokemonList={this.updatePokemonList} pokemonAmount={this.state.pokemonAmount} generatePokemonList={this.generatePokemonList}/>
                <PokemonList fetchedData={this.state.fetchedDataAmount} pokemonAmount={this.state.pokemonAmount} pokemonList={this.state.pokemonList} pageNumber={this.state.pageNumber} updatePokemonList={this.updatePokemonList}/>
                <Footer />
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"))