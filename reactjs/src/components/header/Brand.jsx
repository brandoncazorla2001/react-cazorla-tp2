import brand from "../../img/brand.svg"
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <div className="contendorMarca">
            <Link to="/">
                <img src={brand} alt="LOGO" title="Anonymous Cars"></img>
            
           <span>Anonymous cars</span>
           </Link>
        </div>
    )
}

export default Brand;