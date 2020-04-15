import React from "react";

class TypeList extends React.Component {
    clickHandle = (e) => {
        console.log(this.props)
        fetch(`https://pokeapi.co/api/v2/type/${e.target.innerText}`)
            .then(res => res.json())
            .then(res => {
                Promise.all(
                    res.pokemon.map((element)=>{return element.pokemon})
                    ).then((res)=>{this.props.updatePokemonList(res)})
            })
    }
    typesListfunction = () => {
       
        if (this.props.typeList == null) {
            return <h2>Loading Data from pokedex</h2>
        }
        else {
            const typeList = this.props.typeList.map((el, index) => {
                return <li key={index} onClick={this.clickHandle}>{el.name}</li>
            })
            return (
                <ul className="typesBar">
                    {typeList}
                </ul>)
        }
    }

    render() {
        this.typesListfunction()
        return <>{this.typesListfunction()}</>
    }
}
export default TypeList;