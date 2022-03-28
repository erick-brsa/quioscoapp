import { useEffect, useCallback } from 'react'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'
import Layout from '../layout/Layout'

const Total = () => {
	const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

	const comprobarPedido = useCallback(() => {
		return pedido.length === 0 || nombre === '' || nombre.length < 3;
	}, [pedido, nombre])

	useEffect(() => {
		comprobarPedido()
	}, [pedido, comprobarPedido])

	return (
		<Layout pagina="Total y confirmar pedido">
			<h1 className="text-4xl font-black">Total y confirmar pedido</h1>
			<p className='text-2xl my-10'>Confirma tu pedido a continuación</p>
			<form
				onSubmit={colocarOrden}
			>
				<div>
					<label
						htmlFor="nombre"
						className="block uppercase text-slate-800 font-bold text-xl">
						Nombre
					</label>
					<input
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
						type="text"
						id="nombre"
						className="bg-gray-200 w-full lg:w-1/3 p-2 rounded-md mt-3"
					/>
				</div>
				<div className='mt-10'>
					<p className='text-xl'>Total a pagar: {''}
						<span className='text-2xl font-bold'>{formatearDinero(total)}</span>
					</p>
				</div>
				<div>
					<input
						type="submit"
						value="Confirmar pedido"
						className={
							`${comprobarPedido() ? 'bg-indigo-100 text-gray-400' : 'bg-indigo-600 hover:bg-indigo-700' } 
							w-full p-2 rounded mt-10 lg:w-auto text-white text-center font-bold uppercase px-3`}
						disabled={comprobarPedido()}
					/>
				</div>
			</form>
		</Layout>
	)
}

export default Total