import styled from 'styled-components';
import { Mic, Search, ShoppingCartOutlined} from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import ShifuLogo from "../images/logo1.png";
import { Mobile } from '../../store/Responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const cartQty = useSelector((state) => state.cart.cartQty);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:"grey", fontSize:16, cursor:"pointer"}}/>
                        <Mic style={{color:"grey", fontSize:17, cursor:"pointer"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Image src={ShifuLogo} />
                        <Shifu>
                            C`<ShifuItem>SHIFU</ShifuItem>
                        </Shifu>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Link to="/cart">
                            <Badge badgeContent={cartQty} color='secondary'>
                                <ShoppingCartOutlined/>
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    background-color: aliceblue;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    
   ${Mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    ${Mobile({padding: "0px 0px", justifyContent: "center", height: "50px", })}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    gap: 5%;

    ${Mobile({flex: 2, justifyContent: "center", marginRight: "5px", height: "50px"})}
`;
const MenuItem = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${Mobile({fontSize: "12px"})}
`;


const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${Mobile({height: "50px"})}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${Mobile({display: "none"})}
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 10px;
    margin-left: 25px;
    padding: 5px;

    ${Mobile({
        margin: "0px 0px 0px 4px",
        padding: "2px",
    })}
`;
const Input = styled.input`
    border: none;
    background-color: transparent;

    ${Mobile({width: "50px",})}

`;


const Center = styled.div`
    flex: 1;
    align-items: center;

    ${Mobile({height: "50px"})}

`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;

    ${Mobile({marginTop: "0.22px"})}
`;

const Image = styled.img`
     width: 250px; 
     height: 40px;

    ${Mobile({display: "none"})}
`;

const Shifu = styled.h1`
    display: none;
    
    font-size: 20px;
    font-weight: 700;

   ${Mobile({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

   })}
`;
const ShifuItem = styled.span`
    color: #2a6deb;
`;





export default NavBar;
