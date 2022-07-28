import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import NewsLetter from "../components/ui/NewsLetter";

import { useEffect, useState } from "react";
import Footer from "../components/ui/Footer";
import Announcements from "../components/ui/Announcements";
import NavBar from "../components/ui/NavBar";
import { Mobile } from "../store/Responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../store/fetchMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Cartslice"

const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product, setproduct] = useState(null);
    const [Qty, setQty] = useState(1)
    const [Color, setColor] = useState(null)
    const [Size, setSize] = useState(null)
    const dispatch = useDispatch();

    //Fetching product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/product/find/${productId}`);
                setproduct(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        getProduct();
    }, [productId])
    
    //Changing amount of product
    const onChangeQty = (e) => {
        e.target.name = "add" && setQty(Qty + 1);
        e.target.name = "sub" && Qty > 1 && setQty(Qty - 1);
    };

    //Updating Cart
    const cartHandler = () => {
        dispatch(addProduct({...product, Qty, Size, Color}))
    };

    return (
        <Container>
            <Announcements />
                <NavBar />
                <Wrapper>
                    <ImageContainer>
                        <Image src={product.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>L{product.desc}</Description>
                        <Price>$ {product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {product.color?.map((c) => <FilterColor color={c} key={c} onClick={() => setColor(c)}/>)}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterOptions onChange={(e) => setSize(e.target.value)}>
                                    {product.size?.map((s) => <FilterSize key={s}>{s}</FilterSize>)}
                                </FilterOptions>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove style={{cursor:"pointer"}} name="sub" onClick={() => onChangeQty}/>
                                <Amount>{Qty}</Amount>
                                <Add style={{cursor:"pointer"}} name="add" onClick={() => onChangeQty}/>
                            </AmountContainer>
                            <Button onClick={() => cartHandler}>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <NewsLetter/>
                <Footer/>
        </Container>
    );
}

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${Mobile({flexDirection: "column", padding: "10px"})}
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${Mobile({height: "50vh",})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${Mobile({padding: "0px 10px",})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 30px 0px;

    ${Mobile({margin: "10px 0px", fontSize: "20px"})}
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 80%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${Mobile({width: "100%"})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`   
    margin-right: 10px;
    font-weight: 200;
    font-size: 20px;
    
`;

const FilterColor = styled.div`
    margin: 0px 5px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${(props) => (props.color === "white" && "0.5px solid black")};
    background-color: ${(props) => props.color};
`;

const FilterOptions = styled.select`
    padding: 5px;
    cursor: pointer;
`;

const FilterSize = styled.option``;

const AddContainer = styled.div`
    margin: 30px 0px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Mobile({width: "100%",})}
`;

const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Amount = styled.span`
    margin: 0px 5px;
    padding: 5px 8px;
    border: 1px solid teal;
    border-radius: 6px;
    font-weight: 900;
    font-size: 20px;
`;

const Button = styled.button`
    padding: 10px;
    border: 2px solid teal;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
`;

export default Product;
