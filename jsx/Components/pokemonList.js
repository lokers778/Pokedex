import React from "react";
import Pokemon from './pokemon'
import FetchData from "../helperFunctions/fetchDataFunction"
class PokemonList extends React.Component {
    state = {
        listToDisplay:null,
    }
    pokemonListfunction = () => {
        if (this.state.listToDisplay == null) {
            return <li>Loading Data from pokedex</li>
        }
        else {
             const pokemonList = this.state.listToDisplay.map((el, index) => {
                 return <Pokemon key={index} pokemonData={el}/>
             })
            return pokemonList
        }
        
    }
    
    componentDidUpdate(prevProps) {
         if (prevProps.pokemonList !== this.props.pokemonList) {
             Promise.all(this.props.pokemonList.map(pokemon =>
                 fetch(pokemon.url)
                     .then(res => res.json())
             )).then(res => {
                 this.setState({ listToDisplay: res })
                 
             })
    }
    }
    render() {
        return (
            <main className="pokemonList">
                <section className="pokedex">
                    <ul>
                        {this.pokemonListfunction()}
                    </ul>
                </section>
                <section className="pageList">
                </section>
            </main>
        )
    }
}

export default PokemonList;