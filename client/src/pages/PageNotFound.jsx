import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/ui/NavBar";
import { Mobile } from "../store/Responsive";

const PageNotFound = () => {
    return (
        <div style={{height: "100vh", width: "100vw", backgroundColor: "pink" }}>
            <NavBar/>
            <Container>
              <Title>Oooops! Page Not Found</Title>
              <Link to="/" style={{textDecoration: "none", fontSize: "20px", color: "Teal", fontWeight: "800"}}>Home</Link>
            </Container>
        </div>
        
    );
}

const Container = styled.div`
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Title = styled.h1`
   ${Mobile({})}
`;


export default PageNotFound;
