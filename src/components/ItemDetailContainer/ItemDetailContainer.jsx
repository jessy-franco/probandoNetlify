import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../mockService/mockServiceList";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    let { idProducto } = useParams();

    useEffect(() => {
        if (idProducto) {
            getSingleItem(idProducto)
                .then((arrayItems) => {
                    setProduct(arrayItems);
                })
                .catch(() =>
                    Swal.fire({
                        imageUrl: "https://ih0.redbubble.net/image.158935923.8203/flat,1000x1000,075,f.jpg",
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        icon: 'error',
                        title: 'Oops...',
                        text: ' El producto no existe',
                        confirmButtonText:' <a href="/"}}>Desea volver a home? </a>',
                        confirmButtonColor: '#94B49F',
                        width: 600,
                        padding: '3em',
                        color: '#606870',
                        background: '#fff',
                        backdrop: `grey`,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false,

                    })

            );
        }
        else {
            console.log("sigue sin funcionar")
        }
    }, [idProducto]);

    return <ItemDetail product={product} />;

}


export default ItemDetailContainer;