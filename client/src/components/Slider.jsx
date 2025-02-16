import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from '../data'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f9f3f3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction==="left" && "10px"};
    right: ${props=> props.direction==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props)=> props.sliderIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    width: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
` 
const Button = styled.button`
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`
const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSliderIndex(sliderIndex >0 ? sliderIndex-1 : 2)
        }else{
            setSliderIndex(sliderIndex <2 ? sliderIndex+1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
            {sliderItems.map((item)=>{
                return (
                    <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                    </Slide>
                )
            })}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider