import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/ui/Announcements";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

import { useState } from "react";
import { Mobile } from "../store/Responsive";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [amountValue, setamountValue] = useState(0)

    const onChangeAmountValue = (operation) => {
        if(operation === "+"){
            setamountValue(amountValue + 1);
        }else if(operation === "-" && amountValue > 0){
            setamountValue(amountValue - 1);
        }
    };


    return (
        <Container>
            <Announcements />
            <NavBar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag ({cart.cartQty})</TopText>
                        <TopText>Your Wishlist (3)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Products>
                        {cart.products.map((product) => {
                            return (
                                <div key={product._id}>
                                    <Product>
                                        <ProductDetails>
                                            <Image src={product.img} />
                                            <Details>
                                                <ProductName><b>Product: </b>{product.title}</ProductName>
                                                <ProductId><b>ID: </b>{product._id}</ProductId>
                                                <ProductColor color={product.color}/>
                                                <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                            </Details>
                                        </ProductDetails>
                                        <PriceDetails>
                                            <AmountContainer>
                                                <Remove style={{cursor:"pointer"}} onClick={() => onChangeAmountValue("-")}/>
                                                <Amount>{product.productQty}</Amount>
                                                <Add style={{cursor:"pointer"}} onClick={() => onChangeAmountValue("+")}/>
                                            </AmountContainer>
                                            <ProductPrice>$ {product.price * product.productQty}</ProductPrice>
                                        </PriceDetails>
                                    </Product>
                                    <Hr/>
                                </div>
                            );
                        })}
                    </Products>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ 0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;

    ${Mobile({padding: "5px"})}
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 400;

    ${Mobile({marginBottom: "10px"})}
`;

const Top = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Mobile({padding: "0px 10px", marginBottom: "20px"})}
`;

const TopButton = styled.button`

    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    //border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" ? "white" : "black"};

    ${Mobile({margin: "0px 10px",})}
`;

const TopTexts = styled.div`
    display: flex;

    ${Mobile({display: "none",})}
`;

const TopText = styled.span`
    margin: 0px 20px;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
`;


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${Mobile({flexDirection: "column",})}
`;

const Products = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    margin: 0px 10px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    text-align: center;
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-around;

    ${Mobile({flexDirection: "column"})}
`;

const Hr = styled.hr`
    background-color: teal;
    border: none;
    height: 1px;

    ${Mobile({margin: "10px 0px 30px 0px"})}
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
  

`;

const Image = styled.img`
    width: 200px;
    border-radius: 20px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    border: ${(props) => props.color === "white" && "0.5px solid black"};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Mobile({margin: "20px 0px 0px 0px"})}
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

    ${Mobile({margin: "0px 15px"})}
`;

const ProductPrice = styled.span`
    margin: 20px 0px;

    ${Mobile({margin: "10px 0px", fontSize: "25px"})}
`;

export default Cart;
