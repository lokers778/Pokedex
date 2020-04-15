import React from "react";
import Pokemon from './pokemon'
import FetchData from "../helperFunctions/fetchDataFunction"
class PokemonList extends React.Component {
    state = {
        pokemonListCreated: null,
        listToDisplay:null,
    }
    pokemonListfunction = () => {
        if (this.state.listToDisplay == null) {
            return <li>Loading Data from pokedex</li>
        }
        else {
            return <li>Loading Data from pokedex222</li>
        }
        
    }
    
    componentDidUpdate(prevProps) {
         if (prevProps.pokemonList !== this.props.pokemonList) {
             Promise.all(this.props.pokemonList.map(pokemon =>
                 fetch(pokemon.url)
                     .then(res => res.json())
             )).then(res => {
                 this.setState({ listToDisplay: res })
                 console.log(this.state)
             })
    }
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <main className="pokemonList">
                <section className="pokedex">
                    <ol>
                        {this.pokemonListfunction()}

                    </ol>
                </section>
                <section className="pageList">
                </section>
            </main>
        )
    }
}

export default PokemonList;