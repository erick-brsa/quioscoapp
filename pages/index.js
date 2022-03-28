import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import Producto from '../components/Producto'

export default function Home() {
  const { categoriaActual, producto } = useQuiosco()

  return (
    <Layout pagina="Menú">
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className='text-2xl'>
        Elige y personaliza tu pedido a continuación
      </p>
      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  )
}
