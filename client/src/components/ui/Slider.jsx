import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../../store/DummyData";
import { Mobile } from "../../store/Responsive";

const Slider = () => {
    const [SlideIndex, setSlideIndex] = useState(0);
    //const [autoSlide, setautoSlide] = useState(true)

    // if(autoSlide){
    //         setTimeout(() => {
    //             if(SlideIndex < (sliderItems.length - 1)){
    //                 setSlideIndex(SlideIndex + 1);
    //             }else{
    //                 setSlideIndex(0);
    //             }
    //             console.log(SlideIndex);
    //         }, 5000);
    // };

        
    const ImageSlideHandler = (direction) => {
     //   setautoSlide(false)
        if(direction === "left"){
            setSlideIndex(SlideIndex > 0 ? (SlideIndex - 1) : (sliderItems.length - 1));
        }else if(direction === "right"){
            setSlideIndex(SlideIndex < (sliderItems.length - 1) ? (SlideIndex + 1) : 0);
        }
        // setTimeout(() => {
        //     setautoSlide(true)
        // }, 15000);
    };

    return (
        <Container >
            <Arrow direction="left" onClick={() => ImageSlideHandler("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={SlideIndex}>
                {sliderItems.map((slide) => {
                    return(
                        <Slide bg={slide.bg} key={slide.id}>
                            <ImgContainer>
                                <Image src={slide.image}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{slide.title}</Title>
                                <Description>{slide.Desc}</Description>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    );
                })}
            </Wrapper>
            <Arrow direction="right" onClick={() => ImageSlideHandler("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;

    ${Mobile({display: "none"})}
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => (props.slideIndex * -100)}vw);
    transition: transform 1.5s ease-in-out;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: teal;
   // background-color: ${(props) => props.bg};
`;
const Image = styled.img`
    height: 100%;
`;
const ImgContainer = styled.div`
    flex:1;
    height: 100%;
    text-align: center;
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;;
`;
const Title = styled.h1`
    font-style: 70px;
`;
const Description = styled.p`
    font-size: 20px;
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #9ba2a8;
    cursor: pointer;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    z-index: 2;
`;


export default Slider;
