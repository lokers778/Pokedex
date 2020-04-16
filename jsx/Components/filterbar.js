import React from "react";
import TypeList from "./typesList"
import fetchData from "../helperFunctions/fetchDataFunction.js"
class FilterBar extends React.Component {
    handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0`)
            .then(res => res.json())
            .then((res) => { this.props.updatePokemonList(res.results,res.count) })
    }
    render() {
        console.log(this.props)
        return (
            <section className="filterBar">
                <div onClick={this.handleClick}>show All</div>
                <TypeList typeList={this.props.typeList} updatePokemonList={this.props.updatePokemonList} />
                <h2>znaleziono pokemonów{this.props.pokemonAmount}</h2>
            </section>
        )
    }
}

export default FilterBar