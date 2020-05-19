import React from "react";
import TypeList from "./typesList"
class FilterBar extends React.Component {
    state = {
        moreLess: "more",
        inputValue: "",
    }
    handleClick = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0`)
            .then(res => res.json())
            .then((res) => { this.props.updatePokemonList(res.results, res.count) })
            .catch((err) => { alert(err) })
    }
    handleChange = (e) => {
        this.setState({ inputValue: e.currentTarget.value });
    }
    handleChangeRadio = (e) => {
        this.setState({ moreLess: e.currentTarget.value });
    }
    updateList = (data, value = 0, moreLess) => {
        const oldList = this.props.pokemonDetailedList
        let newList = []
        if (oldList != null) {
            if (data == "height" && moreLess == "more") {
                newList = oldList.filter((el) => { return el.height > value })
            }
            if (data == "height" && moreLess == "less") {
                newList = oldList.filter((el) => { return el.height < value })
            }
            else if (data == "weight" && moreLess == "more") {
                newList = oldList.filter((el) => { return el.weight > value })
            }
            else if (data == "weight" && moreLess == "less") {
                newList = oldList.filter((el) => { return el.weight < value })
            }
            this.props.updatePokemonDetailedList(newList)
        }
    }
    render() {
        return (
            <section className="filterBar">
                <h2>Found pokemons : {this.props.pokemonAmount}</h2>
                  {/*
                <section className="filterBySize">
                    <h4>Filter By</h4>
                    <div className="radioInputs">
                        <label>Less  <input type="radio" name="moreLess" value="less" onChange={this.handleChangeRadio} /></label>
                        <label>More <input type="radio" name="moreLess" value="more" onChange={this.handleChangeRadio} /></label>
                    </div>
                  
                    <input type="number" value={this.state.inputValue} onChange={this.handleChange} />
                    <div className="button">
                        <button onClick={(e) => { this.updateList("height", this.state.inputValue, this.state.moreLess) }}>height</button>
                        <button onClick={(e) => { this.updateList("weight", this.state.inputValue, this.state.moreLess) }}>weight</button>
                    </div>
                </section>
                  */}
                <section className="searchByDiv">
                    <div onClick={this.handleClick}>show All</div>
                    <TypeList typeList={this.props.typeList} updatePokemonList={this.props.updatePokemonList} />
                </section>
            </section >
        )
    }
}

export default FilterBar