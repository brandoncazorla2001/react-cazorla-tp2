import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Pick-Ups">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/SUV">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Coupé">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Deportivo">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;