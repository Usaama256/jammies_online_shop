import { Link } from "react-router-dom";
import  styled from "styled-components"
import { Mobile } from "../../store/Responsive";

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.title}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;

    ${Mobile({height: "20vh"})}
`;

const Container = styled.div`
    width: 30%;
    margin: 10px;
    height: 70vh;
    position: relative;

    &:hover ${Image}{
        transform: scale(102%);
    }
    ${Mobile({width: "100%"})}

`;

const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

const Title = styled.h1`
    color: white;
    margin: 20px;
    font-size: xx-large;
    font-weight: 1000;
    text-transform: uppercase;
`;

const Button = styled.button`
    border: none;
    background-color: white;
    color: grey;
    padding: 10px;
    font-weight: 700;
    cursor: pointer;
`;

export default CategoryItem;
