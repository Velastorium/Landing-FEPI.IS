import { products } from '../Products'
import Title from "../Components/Title/Title";
import ProductCart from '../Components/Products/ProductCart'
const Alquileres = () => {
    return (
        <div>
              <Title title="Lista de productos" />
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {products.map((product, key) =>
                    <ProductCart key={key} data={product} />
                )}
            </div>
        </div>
    );
};

export default Alquileres;

