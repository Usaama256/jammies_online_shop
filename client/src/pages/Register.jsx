import { Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../store/Responsive"
 
const Register = () => {
    return (
        <Container>
            <Image src="https://previews.123rf.com/images/marinafrost/marinafrost2002/marinafrost200200020/141560024-female-hands-using-mobile-on-fashion-background-woman-customer-shopper-use-shopping-app-close-up-top.jpg?fj=1" />
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" style={{flex: 1, minWidth: "40%", margin: "20px 10px 0px 0px"}}/>
                    <Input placeholder="Last Name" style={{flex: 1, minWidth: "40%", margin: "20px 10px 0px 0px"}}/>
                    <Input placeholder="Username" style={{flex: 1, minWidth: "40%", margin: "20px 10px 0px 0px"}}/>
                    <Input placeholder="Email" style={{flex: 1, minWidth: "40%", margin: "20px 10px 0px 0px"}}/>
                    <Input placeholder="Password" style={{flex: 1, minWidth: "40%", margin: "20px 10px 0px 0px"}}/>
                    <Input placeholder="Confirm Password" style={{flex: 1, minWidth: "40%", margin: "20px 10px 0px 0px"}}/>
                    <Aggreements>
                        By Creating an Account, I consent to the processing of my Personal Data 
                        in accordance with the <b>PRIVACY POLICY</b>.
                    </Aggreements>
                    <Button>CREATE</Button>
                </Form>
                <p>Already have an account? <Link to="/signin" style={{textDecoration: "none", color:"teal", fontWeight: 700}}>Sign in</Link></p>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    /* background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)), 
    url(https://previews.123rf.com/images/marinafrost/marinafrost2002/marinafrost200200020/141560024-female-hands-using-mobile-on-fashion-background-woman-customer-shopper-use-shopping-app-close-up-top.jpg?fj=1) no-repeat center; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -9999;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 25px 20px;
    background-color: whitesmoke;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Mobile({width: "80%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    
    ${Mobile({flexDirection: "column"})}
`;

//const Input = styled.input``;

const Aggreements = styled.span`
    font-size: 16px;
    margin: 20px 0px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    
    cursor: pointer;
`;

export default Register;
