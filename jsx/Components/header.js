import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <section className="logoImage">
                    <div className="pokeball">
                        <div className="pokeballButton"></div>
                    </div>
                </section>
                <section className="logoTitle"><h1>POKEDEX v.1.12</h1></section>
            </header>
        )
    }
}

export default Header;