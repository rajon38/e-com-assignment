import React, {useEffect, useState} from 'react';
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Status from "../../components/StatusCard/status";
import Category from "../../components/Category/Category";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () =>{
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            setProducts(data)
        }
        fetchProducts();
    },[])
    return (
        <>
            <Hero/>
            <Category/>
            {
                products.length > 0 ?
                <Products products={products}/>
            :
                    <div>Loading...</div>
            }
            <Status/>
        </>
    );
};

export default Home;