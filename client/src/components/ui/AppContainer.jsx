import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const AppContainer = (props) => {
    return (
        <Fragment>
            <GlobalStyle/>
            <Container>
                {props.children}
            </Container>
        </Fragment>
    );
}
const Container = styled.div``;

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0%;
    box-sizing: border-box;
    margin: 0px;
    overflow-x: hidden;
    background-color: whitesmoke;
    font-family: "Exo 2", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`;

export default AppContainer;
