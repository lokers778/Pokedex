import React from "react";
import TypeList from "./typesList"

class FilterBar extends React.Component {
  
    render() {
        return (
            <section className="filterBar">
                <TypeList typeList={this.props.typeList} updatePokemonList={this.props.updatePokemonList}/>
            </section>
        )
    }
}

export default FilterBar