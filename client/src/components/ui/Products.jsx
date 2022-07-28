import { useEffect, useState } from "react";
import styled from "styled-components";
//import { popularProducts } from "../../store/data";
import { Mobile } from "../../store/Responsive";
import ProductItem from "./ProductItem";
import { publicRequest } from "../../store/fetchMethods";

const Products = ({cat, filters, sort}) => {
    const [Products, setProducts] = useState([])
    const [FilteredProducts, setFilteredProducts] = useState([])

    //Fetching Products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(cat
                    ? `/products?category=${cat}` 
                    : "/products");
                setProducts(res.data);
            } catch (error) {
                console.error(error)
            }
        };

        getProducts();
    }, [cat]);

    //Filtering Products
    useEffect(() => {
        cat && setFilteredProducts(
            Products.filter((item) => 
                Object.entries(filters).every(([key, value]) => 
                    item[key].includes(value)
                )
            )
        );
    }, [cat, filters, Products])

    //Sorting Filtered Products
    useEffect(() => {
        if(sort === "newest"){
            setFilteredProducts((prev) => {
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            })
        }else if(sort === "asce"){
            setFilteredProducts((prev) => {
                [...prev].sort((a, b) => a.price - b.price)
            })
        }else{
            setFilteredProducts((prev) => {
                [...prev].sort((a, b) => b.price - a.price)
            })
        }
    }, [sort])

    return (
        <Container>
            {(cat? FilteredProducts : Products.slice(0, 8)).map((item) => {
                return(
                    <ProductItem key={item.id} item={item}/>
                );
            })}
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    ${Mobile({padding: 0})}
`;

export default Products;
