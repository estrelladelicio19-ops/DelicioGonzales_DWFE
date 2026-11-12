import { useEffect, useState } from "react"

export default function CardProducto({ id, documentType, documentNumber, firstName, lastName, email, phone, address, status, eliminar, editar }) {
    const [mensaje, setMensaje] = useState("");

    function editarPersona() {
        editar({
            id: id,
            documentType: documentType ,
            documentNumber: documentNumber,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            status: status
        });
    }
    return (
        <article className="product-card">
            
            <div className="product-info">
                <span className="product-category">{documentType}</span><br />
                <span className="product-category">{documentNumber}</span><br />
                <span className="product-category">{firstName}</span><br />
                <span className="product-category">{lastName}</span><br />
                <span className="product-category">{email}</span><br />
                <span className="product-category">{phone}</span><br />
                <span className="product-category">{address}</span><br />
                <span className="product-category">{status}</span>
            </div>
            {mensaje}
            <button onClick={() => { setMensaje("Eliminando Porfavor Espere"); eliminar(id) }}>Eliminar</button>
            <button onClick={editarPersona}>Editar</button>
        </article>
    )

}