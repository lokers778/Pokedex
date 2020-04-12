import React from "react";
import Pokemon from './pokemon'

class PokemonList extends React.Component {
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
                    PageList
                </section>
            </main>
        )
    }
}

export default PokemonList;