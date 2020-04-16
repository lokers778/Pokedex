import React from "react";

class Pokemon extends React.Component {
    showTypes() {
        const typeList = this.props.pokemonData.types.map((el, index) => {
            return <li key={index}>{el.type.name}</li>
        })
        return typeList
    }
    showMoves() {
        let slicedMoves = null;
        if (this.props.pokemonData.moves.length > 5) {
            slicedMoves = this.props.pokemonData.moves.slice(0, 4)
        }
        const moveList = (slicedMoves || this.props.pokemonData.moves).map((el, index) => {
            return <li key={index}>{el.move.name}</li>
        })
        return moveList
    }
    showStats() {
        let slicedMoves = null;
        if (this.props.pokemonData.stats > 6) {
            slicedMoves = this.props.pokemonData.stats.slice(0, 5)
        }
        const statList = (slicedMoves || this.props.pokemonData.stats).map((el, index) => {
            return (<li key={index}>{el.stat.name}:{el.base_stat}</li>)
        })
        return statList
    }
    render() {
        console.log(this.props)
        return (
            <li className="pokemon">
                <div className="pokemonBasic">
                    <div className="pokemonBasicInfo">
                        <h5>Name:{this.props.pokemonData.name}</h5>
                        <h5>ID:{this.props.pokemonData.id}</h5>
                        <h6>Height:{this.props.pokemonData.height}</h6>
                        <h6>Weight:{this.props.pokemonData.weight}</h6>
                    </div>
                    <div className="imgDiv">
                        <img alt={this.props.pokemonData.name} title={this.props.pokemonData.name} src={this.props.pokemonData.sprites.front_default || "./image/pokeball.png"} />
                    </div>
                    <ul className="types">
                        <li><h4>Types:</h4></li>
                        {this.showTypes()}
                    </ul>
                </div>
                <div className="grids">
                    <ul className="moves">
                        {this.showMoves()}
                    </ul>
                    <ul className="stats">
                        {this.showStats()}
                    </ul>
                </div>
            </li>
        )
    }
}
export default Pokemon