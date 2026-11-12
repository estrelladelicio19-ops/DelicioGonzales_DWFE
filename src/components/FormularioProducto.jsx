import { useEffect, useState } from "react"

export default function FormularioProducto({ productoEditar, guardar }) {
    const [Formulario, setFormulario] = useState(
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
    )
    function manejarCambio(e) {
        const { name, value } = e.target;
        setFormulario({
            ...Formulario,
            [name]: value
        });

    }

    function agregar(e) {
        e.preventDefault();
        console.log(Formulario);
        guardar(Formulario);
    }


    useEffect(() => {

        //if (productoEditar.id > 0)
        setFormulario(productoEditar);
    }, [productoEditar])

    return (
        <>
            <form onSubmit={agregar}>

                <label htmlFor="documentType">Tipo de Documento</label>
                <input type="text" id="documentType" name="documentType" value={Formulario.documentType} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="documentNumber">Numero de Documento</label>
                <input type="text" id="documentNumber" name="documentNumber" value={Formulario.documentNumber} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="firstName">Primer Nombre</label>
                <input type="text" id="firstName" name="firstName" value={Formulario.firstName} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="lastName">Apellidos</label>
                <input type="text" id="lastName" name="lastName" value={Formulario.lastName} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="email">Correo</label>
                <input type="email" id="email" name="email" value={Formulario.email} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="phone">Telefono</label>
                <input type="text" id="phone" name="phone" value={Formulario.phone} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="address">Direccion</label>
                <input type="text" id="address" name="address" value={Formulario.address} onChange={manejarCambio}></input>
                <br />
                <br />
                <label htmlFor="status">Estado</label>
                <input type="text" id="status" name="status" value={Formulario.status} onChange={manejarCambio}></input>
                <br />
                <br />
                <button>{Formulario.id > 0 ? "Editar" : "Guardar"}</button>

            </form>

        </>
    )
}