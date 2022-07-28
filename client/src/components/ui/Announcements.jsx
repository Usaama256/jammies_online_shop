import styled from 'styled-components';

const Announcements = () => {
    
    return (
        <Container>
            Super Deal! Free shipping on Orders Over $50
        </Container>
    );
}

const Container = styled.div`
    height: 20px;
    width: 100%;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`;

export default Announcements;
