import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno= "Pick-Ups"
                    itemDos= "SUV"
                    itemTres= "Coupé"
                    itemCuatro= "Deportivo"
                />
            </nav>

            <div className="containerCart">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;