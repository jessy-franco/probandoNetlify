import React from "react";
import ItemsCard from "../Items/Items"
import GridProductos from "../GridGalery/GridGalery"
function ItemsProd() {
    return (
        <div>
            <GridProductos>
            <ItemsCard
                detail="Azaleas en flor"
                price={2100}
                title="Azalea"
                imgurl="https://images.pexels.com/photos/7718158/pexels-photo-7718158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ItemsCard
                detail="clavelines en flor"
                price={850}
                title="Clavelines"
                imgurl="https://images.pexels.com/photos/2480232/pexels-photo-2480232.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <ItemsCard
                detail="geranios en flor"
                price={780}
                title="Geranios"
                imgurl="https://images.pexels.com/photos/6608986/pexels-photo-6608986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ItemsCard
                detail="jazmin de leche en flor"
                price={879}
                title= "Jazmin de leche"
                imgurl="https://images.pexels.com/photos/5649254/pexels-photo-5649254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            </GridProductos>
        </div>
    );
}


export default ItemsProd;