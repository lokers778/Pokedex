import React from "react";

class TypeList extends React.Component {
    clickHandle = (e) => {
        fetch(`${e.target.dataset.url}`)
            .then(res => res.json())
            .then(res => {
                Promise.all(
                    res.pokemon.map((element)=>{return element.pokemon})
                ).then((res) => { this.props.updatePokemonList(res, res.length) })
                .catch((err) => { alert(err) })
            })
    }
    generateTypesListFunction = () => {
        if (this.props.typeList == null) {
            return (
                <div className="loadingDiv">
                    <li>Loading Data from pokedex...</li>
                    <div className="pokeball">
                        <div className="pokeballButton"></div>
                    </div>
                </div>
            )
        }
        else {
            const typeList = this.props.typeList.map((el, index) => {
                return <li key={index} data-url={el.url} onClick={this.clickHandle}>{el.name}</li>
            })
            return (
                <ul className="typesBar">
                    {typeList}
                </ul>)
        }
    }
    render() {
        return <>{this.generateTypesListFunction()}</>
    }
}
export default TypeList;