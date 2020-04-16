import React from "react";
import Pokemon from './pokemon'
class PokemonList extends React.Component {
    state = {
        listToDisplay: null,
    }
    generatePokemonList = () => {
        if (this.state.listToDisplay == null) {
            return <li>Loading Data from pokedex</li>
        }
        else if (this.state.listToDisplay.length==0) {
            return <li>Sorry We cannot find data about that type</li>
        }
        else {
            const pokemonList = this.state.listToDisplay.map((el, index) => {
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
            let newList=[]
            for (let i = 1; i <= this.props.pageNumber; i++) {
                newList.push(<li key={i} onClick={() => { this.handleClick((i-1)*200)}}>{i}</li>)
              }
            return (newList)
        }

    }
    componentDidUpdate(prevProps) {
        if (prevProps.pokemonList !== this.props.pokemonList) {
            this.setState({ listToDisplay: null })
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