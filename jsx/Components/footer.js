import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="name">Pokedex v1.12 made by Pokemon Company</div>
                <div className="pokemonImage"> <img alt="pokedex" title="pokedex" src="image/pokedex.png"/></div>
            </footer>
        )
    }
}
export default Footer;