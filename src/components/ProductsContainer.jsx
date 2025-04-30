import { useState, useEffect } from 'react';
import '../styles/Productos.css';
import Card from './Card';
import Carrito from './Carrito';

// Muestra los productos de la tienda.

function ProductsContainer({ productos }) {
	/* 
	Guarda los productos que estan en el carrito de la siguiente manera:
	crea la variable productosCarrito, crea la función setProductosCarrito para actualizar la anterior variable y con "[]" le da como valor inicial un array vacio, sin esto ultimo lo demás va a fallar.
	Para una explicación mas detallada de useState: https://es.react.dev/reference/react/useState
	*/
	const [productosCarrito, setProductosCarrito] = useState([]);

	{
		/* 
		En un futuro se utiliza useEffect para obtener la data de la API cada vez que se renderiza la pagina.
		Para una explicación detallada de useEffect: https://es.react.dev/reference/react/useEffect
		*/
		useEffect(() => {
			fetch('https://fakestoreapi.com/products')
				.then((respuesta) => respuesta.json())
				.then(
					(datos) => console.log(datos)
					// En este punto se usaría "setProductosCarrito" para introducir esta data en "productosCarrito".
				)
				.catch((error) => console.error('Error:', error));
		}, []);
	}

	/* 
	Agrega nuevos productos al carrito.
	El contenido del carrito proviene de la variable "productosCarrito" por lo que al actualizarla el carrito tambien lo hara.

	En este caso se usa el spread syntax(...) para separar los valores existentes dentro de un nuevo array y se le agrega el nuevo producto, todo esto dentro de la función necesaria para actualizar la variable productosCarrito.  
	Para una explicación mas detallada de spread syntax: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	*/
	function funcionCarrito(producto) {
		setProductosCarrito([...productosCarrito, producto]);
	}

	return (
		<div style={{ backgroundColor: '#033' }}>
			<h2>ProductosContainer</h2>
			<div className='productos-container'>
				{/* el segundo parametro dentro de map (index) siempre deberia contener
				la posición del producto dentro del array, este valor es
				unico(en este componente) asi que puede ser utilizado para la key. */}
				{productos.map((producto, index) => (
					<Card
						producto={producto}
						key={index}
						funcionCarrito={funcionCarrito}
					/>
				))}
			</div>
			{
				<div className='carrito-container'>
					<Carrito productos={productosCarrito} />
				</div>
			}
		</div>
	);
}

export default ProductsContainer;
