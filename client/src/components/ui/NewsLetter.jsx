import { TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../../store/Responsive";

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get Timely Updates From Your Favorite Products</Description>
            <InputContainer>
                <TextField id="outlined-basic" label="Your Email" variant="outlined" style={{
                    flex: 9,
                }}/> 
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    );
}

const Container = styled.div`
    margin: 20px;
    background-color: #f8efec;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${Mobile({height: "30vh", margin: "0px 0px 10px 0px"})}
`;

const Title = styled.h1`
    font-size: 70px;
    margin: 20px;

    ${Mobile({fontSize: "40px", margin: "10px",})}
`;

const Description = styled.h2`
    ${Mobile({fontSize: "16px", margin: "10px 20px", textAlign: "center"})}
`;

const InputContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid grey;
    background-color: transparent;

    ${Mobile({width: "80%"})}
`;

const Button = styled.button`
    margin-left: 10px;
    flex: 1;
    background-color: teal;
    height: 50px;
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
`;



export default NewsLetter;
