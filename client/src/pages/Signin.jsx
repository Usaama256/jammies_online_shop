import { Input } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { Mobile } from "../store/Responsive";

const Signin = () => {
    const dispatch = useDispatch();
    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    const [error1, setError] = useState(null)

    const { isFetching, error, errorSms } = useSelector((state) => state.user)

    const signinHandler = (e) => {
        e.preventDefault();
        if(Username === null || Password === null){
            setError("Make Sure Password And Username Are Not Blank!!")
        }else{
            login(dispatch, {Username, Password});
        }
    };

    return (
        <Container>
            <Image src="https://previews.123rf.com/images/marinafrost/marinafrost2002/marinafrost200200020/141560024-female-hands-using-mobile-on-fashion-background-woman-customer-shopper-use-shopping-app-close-up-top.jpg?fj=1" />
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} style={{minWidth: "40%", margin: "0px 0px"}}/>
                    <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" style={{minWidth: "40%", margin: "20px 0px"}}/>
                    <Button onClick={() => signinHandler()} disabled={isFetching} >SIGN IN</Button>
                    {error && <Error>{errorSms}</Error>}
                    {error1 && <Error>{error1}</Error>}
                    {!isFetching 
                        &&  <Links>
                                <Link to="/resetpassword" style={{textDecoration: "none", color:"teal", margin: "5px 0px"}}>Forgot Password?</Link>
                                <Link to="/signup" style={{textDecoration: "none", color:"teal"}}>Create An Account</Link>
                            </Links>
                    }
                </Form>
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
    flex-direction: column;
    width: 80%;
`;

//const Input = styled.input``;

const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
    &:disabled{
        color: gray;
        cursor: not-allowed;
    }
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0px;
`;

const Error = styled.div`
    color: red;
    margin: 20px 0px;
`;

export default Signin;
