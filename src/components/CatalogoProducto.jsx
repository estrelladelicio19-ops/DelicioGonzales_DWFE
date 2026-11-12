import { useEffect, useState } from "react"
import { guardarPersona, obtenerPersonas, borrarPersona, actualizarPersona } from "../services/ProductoServices"
import CardProducto from "./CardProducto";
import FormularioProducto from "./FormularioProducto";

export default function CatalogoPersona() {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState({
        id: 0

    });
    const [mensaje, setMensaje] = useState('')

    async function listar() {
        const resultado = await obtenerPersonas();
        setProductos(resultado.data);
    }


    async function agregarProducto(producto) {
        if (producto.id > 0) {
            await actualizarPersona(producto.id, producto)
        }
        else {
            await guardarPersona(producto);
        }


        setProductoEditar(
            {
            id: 0,
            documentType: "",
            documentNumber: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            status: "",
        }
        );
        listar();
    }

    async function eliminarPersona(id) {
        setMensaje('Eliminando Datos...Por Favor Espere')
        await borrarPersona(id);
        listar();
        setMensaje('')
    }
    function editarPersonas(productoeditar) {
        setProductoEditar(productoeditar);
    }

    useEffect(
        () => {

            listar();
        }
        , []
    )
    return (

        <>
            <FormularioProducto productoEditar={productoEditar} guardar={agregarProducto}></FormularioProducto>
            <span>{mensaje}</span>
            <section className="products-container">
                {productos.map(e => <CardProducto
                    id={e.id}
                    documentType={e.documentType}
                    documentNumber={e.documentNumber}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    email={e.email}
                    phone={e.phone}
                    address={e.address}
                    status={e.status}
                    eliminar={eliminarPersona}
                    editar={editarPersonas}
                />)}
            </section>
        </>
    )

}