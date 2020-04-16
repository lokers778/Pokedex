import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <section className="logoImage">
                    <div className="pokeball">
                        <div class="pokeballButton"></div>
                    </div>
                </section>
                <section className="logoTitle">Logo Title</section>
            </header>
        )
    }
}

export default Header;