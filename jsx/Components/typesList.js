import React from "react";

class TypeList extends React.Component {

    typesListfunction = () => {
        if (this.props.typeList == null) {
            return <h2>Loading Data from pokedex</h2>
        }
        else {
            const typeList = this.props.typeList.map((el, index) => {
                return <li key={index}>{el.name}</li>
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