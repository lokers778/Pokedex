import React from "react";
import Pokemon from './pokemon'
class PokemonList extends React.Component {
    generatePokemonList = () => {
        if (this.props.pokemonDetailedList == null) {
            return (
                <div className="loadingDiv">
                    <li>Loading Data from pokedex...</li>
                    <div className="pokeball">
                        <div className="pokeballButton"></div>
                    </div>
                </div>
            )
        }
        else if (this.props.pokemonDetailedList.length == 0) {
            return (
                <div className="loadingDiv">
                    <li>Sorry We cannot find data, please try again</li>
                    <img alt="sad pikachu" title="sad pikachu" src="image/pikachu.png"></img>
                </div>
            )
        }
        else {
            const pokemonList = this.props.pokemonDetailedList.map((el, index) => {
                return <Pokemon key={index} pokemonData={el} />
            })
            return pokemonList
        }
    }
    handleClick = (offset) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200&offset=${offset}`)
            .then(res => res.json())
            .then((res) => { this.props.updatePokemonList(res.results, res.count) })
    }
    createPageList = () => {
        if (this.props.pageNumber <= 1) {
            return null;
        }
        else if (this.props.pageNumber > 1) {
            let newList = []
            for (let i = 1; i <= this.props.pageNumber; i++) {
                newList.push(<li key={i} onClick={() => { this.handleClick((i - 1) * 200) }}>{i}</li>)
            }
            return (newList)
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.pokemonList !== this.props.pokemonList) {
            this.props.updatePokemonDetailedList(null)
            Promise.all(this.props.pokemonList.map(pokemon =>
                fetch(pokemon.url)
                    .then(res => res.json())
            )).then(res => {
                this.props.updatePokemonDetailedList(res)
            })
        }
    }
    render() {
        return (
            <main className="pokemonList">
                <section className="pokedex">
                    <ul>
                        {this.generatePokemonList()}
                    </ul>
                </section>
                <section className="pageList">
                    <ul>
                        {this.createPageList()}
                    </ul>
                </section>
            </main>
        )
    }
}

export default PokemonList;