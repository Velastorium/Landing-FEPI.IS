import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const { id, name, price, image, slug } = props.data;
    return (
        <div className='bg-white p-5 rounded-xl shadow-sm'>
            <Link to={`/Alquileres/${slug}`}>
                <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
            </Link>

            <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
            <div className="flex justify-center items-center text-green-600">
                <p>
                    $<span className="text-2xl font-medium">{price}</span>
                </p>
            </div>

        </div>
    )
}

export default ProductCart