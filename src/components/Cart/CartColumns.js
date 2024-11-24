import React from 'react';

export default function CartColumns(){
    return (
        <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">

        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Producto</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Nombre del producto</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Precio</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Cantidad</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Eliminar</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
        <p className="text-uppercase">Total</p>
        </div>

        </div>

        </div>
    )
}