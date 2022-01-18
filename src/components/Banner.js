import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Wrppper = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    height: auto;
  }
`;
const StyledSlider = styled(Slider)`
  .slick-slide {
    position: relative;
    /* display: block;
    float: left;
    height: 100%;
    min-height: 1px; */
    @media screen and (min-width: 1200px) {
      /* padding: 0 90px; */
      /* padding: 0 12px; */
      box-sizing: content-box;
      /* width: 1060px !important; */
    }
  }
  .slick-slide>div>div>div {
    filter: brightness(50%);
  }
  .slick-center>div>div>div {
    filter: brightness(100%);
    opacity: 1;
  }
  .slick-slide>div {
    /* outline: none;
    place-items: center; */
    /* max-width: 1060px; */
    margin: 20px 10px;
    @media screen and (min-width: 1200px) {
      margin: 0;
    }
  }
  .slick-slide>div>div>div>a>img {
    display: inline-block;
    /* max-width: 1060px; */
  }
`
const ItemsContainer = styled.div`
  /* width: 100%;
  display: inline-block; */
`
const ImageContainer = styled.div`
  /* height: 100%; */
  /* margin: 0 20px; */
  @media screen and (max-width: 1199px) {
    height: 183px;
    border-radius: 3px 3px 0 0;
  }
`
const Anchor = styled.a`
  @media screen and (max-width: 1199px){
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  /* display: inline-block; */
  vertical-align: middle;
`
const InformationContainer = styled.div`
  text-align: center;
  @media screen and (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    left: 34px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    opacity: 0;
    text-align: left;
  }
`
const H2 = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`
const H3 = styled.h3`
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    margin: 0 20px;
    height: 44px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
`
const Hr = styled.hr`
  display: none;
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`
const InformationDirectButton = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  height: 40px;
  padding: 6px 8px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    margin: 6px 0 0 13px;
  }
  .icon {
    margin-left: 2px;
    margin-top: 1px;
  }
`
const DirectButton = styled.span`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  color: inherit;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  ${props =>
    props.dir === 'left' &&
    css`
      left: calc((100% - 1210px) / 2);
    `
  }
  ${props =>
    props.dir === 'right' &&
    css`
      right: calc((100% - 1200px) / 2);
    `
  }
`


const Banner = () => {
  const slider = useRef(null);

  const items = [
    {
      id: 1,
      url: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
      informationHead: "개발자 되고싶은 분들?!",
      informationBody: "프론트엔드 무료 교육과정 참여하기"
    },
    {
      id: 2,
      url: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
      informationHead: "포트폴리오를 부탁해!",
      informationBody: "디자이너의 포폴 살펴보기"
    },
    {
      id: 3,
      url: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
      informationHead: "성과를 내는 마케팅",
      informationBody: "실제 사례를 공개합니다!"
    },
    {
      id: 4,
      url: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
      informationHead: "개발자 성장 비결 공개!",
      informationBody: "Velog, 글 쓰는 개발자들의 이야기"
    },
    {
      id: 5,
      url: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
      informationHead: "성장하는 개발자가 되려면?",
      informationBody: "OOO 검색하지 말 것!"
    },
    {
      id: 6,
      url: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
      informationHead: "UX 디자이너의 커리어 설계",
      informationBody: "브랜드 가치를 더하는 디자인"
    },
    {
      id: 7,
      url: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
      informationHead: "마케팅 주니어를 찾습니다",
      informationBody: "기업 과제 풀고 취업까지 한번에!"
    },
    {
      id: 8,
      url: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
      informationHead: "해, 커리어 EP 02 공개",
      informationBody: "마지막 관문 2라운드의 승자는?"
    },
    {
      id: 9,
      url: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
      informationHead: "2022년 달라지는 노동법령",
      informationBody: "노무관리 쟁점 한 눈에 파악하기"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variabbleWidth: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  return (
    <Wrppper>
      <StyledSlider ref={slider} {...settings}>
        {items.map(item => {
          return (
            <ItemsContainer key={item.id}>
              <ImageContainer>
                <Anchor href='/' alt='img'>
                  <Image src={item.url} />
                </Anchor>
              </ImageContainer>
              <InformationContainer>
                <H2>{item.informationHead}</H2>
                <H3>{item.informationBody}</H3>
                <Hr></Hr>
                <InformationDirectButton className='information' href='/' alt='information'>
                  <DirectButton>바로가기 <span className='icon'><MdOutlineArrowForwardIos /></span></DirectButton>
                </InformationDirectButton>
              </InformationContainer>
            </ItemsContainer>
          )
        })}
      </StyledSlider>
      <Button dir='left' onClick={() => slider.current.slickPrev()}><MdOutlineArrowBackIos className='icon' /></Button>
      <Button dir='right' onClick={() => slider.current.slickNext()}><MdOutlineArrowForwardIos /></Button>
    </Wrppper>
  )
}

export default Banner;