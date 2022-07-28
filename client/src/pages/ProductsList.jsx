import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../components/ui/Announcements";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";
import NewsLetter from "../components/ui/NewsLetter";
import Products from "../components/ui/Products";
import { Mobile } from "../store/Responsive";

const ProductsList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [Filters, setFilters] = useState({})
    const [Sort, setSort] = useState("newest");

    const filterHandler = (e) => {
        const value = e.target.value;
        
        setFilters({
            ...Filters,
            [e.target.name]: value, 
        })
    };
    
    return (
        <Container>
            <Announcements />
            <NavBar />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="color" onChange={filterHandler}>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Green</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select name="size" onChange={filterHandler}>
                        <Option selected disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option selected value="newest">Newest</Option>
                        <Option value="asce">Price (Ascending)</Option>
                        <Option value="desc">Price (Descending)</Option>
                    </Select>
                </Filter>
            </FilterContainer>     
            <Products cat={cat} filters={Filters} sort={Sort}/>     
            <NewsLetter/>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
`;

const Title = styled.h1`
    margin: 20px;

    ${Mobile({margin: "5px 10px", fontSize: "27px"})}
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;

    ${Mobile({margin: "10px"})}
`;

const Filter = styled.div`

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;

    ${Mobile({fontSize: "16px",})}
`;

const Select = styled.select`
    margin-left: 20px;
    padding: 5px;

    ${Mobile({margin: "5px 5px 5px 0px"})}
`;
const Option = styled.option`
    padding: 10px;

    ${Mobile({padding: "5px"})}
`;

export default ProductsList;
