import { EmailOutlined, Facebook, Instagram, LinkedIn, PaymentOutlined, Phone, Room, Twitter, WhatsApp } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../../store/Responsive";
import ShifuLogo from "../images/logo1.png";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Image src={ShifuLogo} />
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis illo enim totam 
                    incidunt voluptate, maiores amet aut quisquam assumenda porro?
                </Description>
                <SocialContainer>
                    <Icon bg="3B5999"> 
                        <Facebook/>
                    </Icon>
                    <Icon bg="E4405F">
                        <Instagram/>
                    </Icon>
                    <Icon bg="1fb61f">
                        <WhatsApp/>
                    </Icon>
                    <Icon bg="3B5999">
                        <LinkedIn/>
                    </Icon>
                    <Icon bg="5AACEE">
                        <Twitter/>
                    </Icon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room/> Downtown, Street 6, Plot 30</ContactItem>
                <ContactItem><Phone/> +256 787 441875</ContactItem>
                <ContactItem><EmailOutlined/> usaamankangi@gmail.com</ContactItem>
                <ContactItem><PaymentOutlined/> Payments</ContactItem>
            </Right>            
        </Container>
    )
}

const Container = styled.div`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;

    ${Mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    ${Mobile({backgroundColor: "#e2e2e2"})}
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${Mobile({backgroundColor: "#f1f1f1"})}
`;

const Title = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
`;

const List = styled.ul`
    padding: 0px;
    margin: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {

    }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;

    ${Mobile({backgroundColor: "#f7f5f5"})}
`;
const Image = styled.img`
    width: 250px; 
    height: 40px;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
`;
const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #${(props) => props.bg};
    cursor: pointer;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
`;
export default Footer;
