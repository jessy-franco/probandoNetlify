import React from "react";
import ItemsCard from "../Items/Items"
import GridProductos from "../GridGalery/GridGalery"

function ItemsProd(props) {
    return (
        <section className="containerProducts">
            <GridProductos>
                {props.productsList.map((product) => (
                    
                    <ItemsCard key={product.id} {...product}/> 
                    
                    ))}
            </GridProductos>
        </section>
    );
}


export default ItemsProd;