import { products } from '../Products'
import ProductCart from '../Components/Products/ProductCart'
const Alquileres = () => {
    return (
        <div>
             <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Lista de Productos</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {products.map((product, key) =>
                    <ProductCart key={key} data={product} />
                )}
            </div>
        </div>
    );
};

export default Alquileres;

