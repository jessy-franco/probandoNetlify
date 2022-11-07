import React from "react";
import ItemsCard from "../Items/Items"
import GridProductos from "../GridGalery/GridGalery"

function ItemsProd(props) {
    return (
        <div>
            <GridProductos>
                {props.productsList.map((product) => (
                    <ItemsCard key={product.id} name={product.name} img={product.img} descripcion={product.descripcion} price={product.price} />
                    
                    ))}
            </GridProductos>
        </div>
    );
}


export default ItemsProd;