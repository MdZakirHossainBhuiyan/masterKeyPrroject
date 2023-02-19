import React, { useEffect, useState } from 'react';
import './TopCart.css'

const TopCart = () => {
    const [product, setProduct] = useState('');
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchComplainsData = async () => {
            setLoader(true);

            const res = await fetch('https://api.hiring.masterkey.tech/api/v1/product/get');
            const data = await res.json();

            setProduct(data.products);

            setLoader(false);
        }

        fetchComplainsData();
    }, [])

    console.log('first', product);


    return (
        <div className='cartArea'>
            <div className='cartImg'>
                <img src={product[0]?.picture} alt="product" />
            </div>
            <div className='cartContent'>
                <h5>{product[0]?.name}</h5>
                <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs</p>
                <p>Price: {product[0]?.price}</p>
                <div className='cartColorButton'>
                    Color: 
                    <button className='f'></button>
                    <button className='s'></button>
                    <button className='t'></button>
                    <button className='fr'></button>

                    
                </div>
            </div>
        </div>
    );
};

export default TopCart;