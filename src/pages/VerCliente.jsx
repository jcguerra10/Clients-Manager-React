import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            }catch (e) {
                console.log(e)
            }
            setCargando(!cargando)
            
        }
        obtenerClienteAPI()
    }, [])

    return (

        cargando ? <Spinner /> : (
            Object.keys(cliente).length === 0 ? <p>No hay Resultados</p> : (

                <div>
                    
                        <>
                            <h1 className="font-black text-4xl text-blue-900 mb-8">Ver Cliente</h1>

                            <p className="text-4xl text-gray-600">
                                <span className="text-gray-800 uppercase font-bold">Cliente: </span>
                                {cliente.nombre}
                            </p>
                            <p className="text-2xl text-gray-600 mt-4">
                                <span className="text-gray-800 uppercase font-bold">Email: </span>
                                {cliente.email}
                            </p>
                            {cliente.telefono && (
                                <p className="text-2xl text-gray-600 mt-4">
                                    <span className="text-gray-800 uppercase font-bold">Telefono: </span>
                                    {cliente.telefono}
                                </p>
                            )}
                            <p className="text-2xl text-gray-600 mt-4">
                                <span className="text-gray-800 uppercase font-bold">Empresa: </span>
                                {cliente.empresa}
                            </p>
                            {cliente.notas && (
                                <p className="text-2xl text-gray-600 mt-4">
                                <span className="text-gray-800 uppercase font-bold">Notas: </span>
                                {cliente.notas}
                            </p>
                            )}
                        </>
                    
                </div>

            )
        )
    )
    
}

export default VerCliente