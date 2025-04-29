import '../styles/Productos.css';

/* 
Muestra la información de un producto.
Para funcionar requiere de una función relacionada al carrito y de un valor "producto", de tipo object y que debe contener: un nombre, una descripción, una URL para una imagen y un precio.
El botón ejecuta "funcionCarrito" (se encuentra en ProductosContainer) al ser clickeado.
 */

function Card({ producto, funcionCarrito }) {
	return (
		<div className='producto-card'>
			<h1 style={{ color: 'black' }}>{producto.nombre}</h1>
			<p style={{ color: 'black' }}>{producto.descripcion}</p>
			<img className='producto-image' src={producto.imagen}></img>
			<p style={{ color: 'black' }}>{producto.precio} $</p>
			<button
				onClick={() => funcionCarrito(producto)}
				style={{ color: 'black' }}
			>
				Agregar al carrito
			</button>
		</div>
	);
}

export default Card;
