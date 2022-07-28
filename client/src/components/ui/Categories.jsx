import styled from "styled-components";
import { categories } from "../../store/DummyData";
import { Mobile } from "../../store/Responsive";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => {
                return(
                    <CategoryItem key={item.id} item={item}/>
                );
            })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    
    ${Mobile({flexDirection: "column", padding: "0px"})}
`;


export default Categories;
