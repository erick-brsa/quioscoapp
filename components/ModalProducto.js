import { useState, useEffect } from 'react';
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

const ModalProducto = () => {
    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()
    const [cantidad, setCantidad] = useState(1);
    const [edicion , setEdicion] = useState(false);
    const { imagen, precio, nombre } = producto;

    // Comprobar si el Modal Actual está en el pedido
    useEffect(() => {
        if (pedido.some(productoState => productoState.id === producto.id)) {

            const productoEdicion = pedido.find(productoState => productoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
            
        }
    }, [producto, pedido]);


    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    width={300}
                    height={400}
                    src={`/assets/img/${imagen}.jpg`}
                    alt={`Imagen producto ${nombre}`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button type="button" onClick={handleChangeModal}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <h1 className="text-2xl font-black">{producto.nombre}</h1>
                <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>
                <div className='flex gap-4 mt-5'>
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad <= 1) return
                            setCantidad(cantidad - 1)
                        }
                        }
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button
                        type="button"
                        onClick={() => {
                            if (cantidad >= 5) return
                            setCantidad(cantidad + 1)
                        }
                        }
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                </div>
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 uppercase font-bold p-5 rounded'
                    onClick={() => {
                            handleAgregarPedido({...producto, cantidad})
                            handleChangeModal()
                        }
                    }
                >
                    {edicion ? 'Guardar Cambios' : 'Añadir al pedido'}
                </button>
            </div>
        </div>
    )
}

export default ModalProducto