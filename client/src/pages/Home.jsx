import styled from "styled-components";
import Slider from "../components/ui/Slider";
import Categories from "../components/ui/Categories";
import Products from "../components/ui/Products";
import NewsLetter from "../components/ui/NewsLetter";
import Announcements from "../components/ui/Announcements";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";

const Home = () => {
    return (
        <Container>
            <Announcements />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
`;

export default Home;
