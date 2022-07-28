import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../../store/Responsive";

const ProductItem = ({item}) => {
    return (
        <Conatiner>
            {/* <Circle /> */}
            <Image src={item.img}/>
            <Info>
                <Icon>
                   <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                   <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Conatiner>
    );
}

const Info = styled.div`
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    z-index: 3;
`;

const Conatiner = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 260px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #d5e8f8;

    &:hover ${Info}{
        opacity: 1;
    }


    ${Mobile({height: "30vh"})}
`;

// const Circle = styled.div`
//     background-color: white;
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     position: absolute;
//     z-index: 1;
// `;

const Image = styled.img`
    width: 100%;
    height: 100%; 
    border-radius: 50%;
    object-fit: cover;
    z-index: 2;
    
`;

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 10px;
    background-color: white;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &:hover{
        background-color: #cddff0;
        transform: scale(1.1);
    }
`;

export default ProductItem;