import React from "react";
import Pokemon from './pokemon'

class PokemonList extends React.Component {
    
    componentDidMount() {
       // console.log(this.props)
    }
    render() {
        return (
            <main className="pokemonList">
                <section className="pokedex">
                    <ol>
                        <Pokemon />
                        <Pokemon />

                    </ol>
                </section>
                <section className="pageList">
                </section>
            </main>
        )
    }
}

export default PokemonList;