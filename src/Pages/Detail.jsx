import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../Products';

const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const findDetail = products.filter(product => product.slug === slug);
        if (findDetail.length > 0) {
            setDetail(findDetail[0]);
        } else {
            window.location.href = '/';
        }
    }, [slug]);

    const handleGoBack = () => {
        navigate(-1); 
    };

    return (
        <div className="relative p-8 bg-white shadow-xl rounded-xl max-w-6xl mx-auto mt-0 mb-0">
            <h2 className="text-5xl text-center font-extrabold text-gray-800 mb-6">Product Detail</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <img
                        src={detail.image}
                        alt={detail.name}
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-extrabold text-gray-900">{detail.name}</h1>
                    <p className="text-3xl font-semibold text-green-600">${detail.price}</p>
                    <p className="text-lg text-gray-700">{detail.description}</p>
                </div>
            </div>
            <button
                onClick={handleGoBack}
                className="p-3 bg-green-600 text-white rounded-lg shadow-lg fixed bottom-6 right-10 transition-transform transform hover:scale-110"
            >
                Regresar
            </button>
        </div>
    );
};

export default Detail;
