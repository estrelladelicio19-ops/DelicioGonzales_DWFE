const URL_API = "http://localhost:3000/api/customers";

export async function obtenerPersonas()
{
    const response = await fetch(URL_API);  
    if (!response.ok)
        {
            throw new Error("Error al cargar la data");            
        }
    
    return await response.json();   
}

export async function guardarPersona(producto) {    
    const respuesta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        throw new Error("Error al registrar persona");
    }

    return await respuesta.json();
}

export async function borrarPersona(id) {    
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });    

    if (!respuesta.ok) {
        throw new Error("Error al eliminar persona");
    }

    return await respuesta.json();
}

export async function actualizarPersona(id,producto) {    
    const respuesta = await fetch(`${URL_API}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });    

    if (!respuesta.ok) {
        throw new Error("Error al eliminar producto");
    }
    return await respuesta.json();
}