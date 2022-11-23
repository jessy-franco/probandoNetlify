import React from "react";
import ItemsCard from "../Items/Items"
import GridProductos from "../GridGalery/GridGalery"

function ItemsProd(props) {
    return (
        <div>
            <GridProductos>
                {props.productsList.map((product) => (
                    
                    <ItemsCard key={product.id} {...product}/> 
                    
                    ))}
            </GridProductos>
        </div>
    );
}


export default ItemsProd;