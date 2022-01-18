import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from "react-icons/ai";
import { VscBell } from "react-icons/vsc";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import Banner from "./components/Banner";

const Wrapper = styled.div`
  
`
const Header = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  position: fixed;
  z-index: 100;
`
const MainBar = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
  @media screen and (max-width: 767px) {
    height: 110px;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    height: 110px;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    margin: 0 auto;
    width: 90%;
    height: 50px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    width: 87.72%;
    height: 50px;
  }
`
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`
const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    height: 30px;
    width: 100%;
    padding: 15px 0;
  }
  @media screen and (max-width: 767px) {
    height: 30px;
    width: 100%;
    padding: 15px 20px;
  }
  .burger__logo {
    display: flex;
    align-items: center;
    .burger {
      margin-top: -2px;
      margin-right: 15px;
      img {
        width: 17px;
        height: 14px;
        object-fit: contain;
        cursor: pointer;
      }
    }
    .logo {
      color: #333333;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 5px;
    }
  } 
`
const NavMenu = styled.ul`
  text-align: center;
  margin: 0;
  @media screen and (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    margin-right: 30px;
  }
  @media screen and (max-width: 767px) {
    text-align: left;
  }

  .hidden {
    @media screen and (min-width: 768px) {
      display: none;
    }
    a {
      padding-left: 20px;
    }
  }
  .more {
    @media screen and (max-width: 767px) {
      display: none;
    }
    .state {
      position: absolute;
      top: 7px;
      right: -10px;
      font-size: 10px;
      color: #3466FF;
      @media screen and (min-width: 992px) and (max-width: 1100px) {
        right: -20px;
      }
    }
  }
  a {
    position: relative;
    vertical-align: middle;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    display: inline-block;
    color: #333333;
    @media screen and (min-width: 992px) and (max-width: 1100px) {
      padding: 15px 0;
      font-size: 13px;
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
      padding: 11px 10px 19px;
      font-size: 13px;
    }
    @media screen and (max-width: 767px) {
      padding: 11px 10px 19px;
    }
  }
`
const NavAside = styled.div`
  height: 100%;
  padding: 9px 0;
  @media screen and (max-width: 767px) {
    padding: 14px 0;
  }
  ul {
    height: 100%;
    margin: 0;
    @media screen and (max-width: 767px) {
      margin-top: -5px;
    }
    li {
      position: relative;
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      button {
        height: 100%;
        padding: 0 5px;
        background: none;
        cursor: pointer;      
        @media screen and (min-width: 1200px) {
          padding: 0 10px;
        }
        .icon {
          font-size: 20px;
        }
        .stateBox {
          display: inline-flex;
          justify-content: center;
          padding-top: 1px;
          background-color: #3466FF;
          width: 13px;
          height: 13px;
          position: absolute;
          top: -7px;
          right: 5px;
          border-radius: 5px;
          @media screen and (max-width: 1199px) {
            left: 15px;
          }
          .state {
            color: white;
            font-size: 10px;
            font-weight: 700;
          }
        }
      }
      .searchBtn {
        position: relative;
        margin-top: 5px;
        @media screen and (max-width: 991px) {
          margin: 0;
        }
      }
      .notiBtn {
        position: relative;
        margin-top: 5px;
        margin-right: 10px;
        @media screen and (min-width: 992px) and (max-width: 1199px) {
          margin-right: 5px;
        }
        @media screen and (max-width: 991px) {
          margin: 0;
        }
      }
    }
    .profileBox {
      display: inline-flex;
      align-items: center;
      margin-right: 5px;
      @media screen and (max-width: 991px) {
        display: none;
        margin-right: 0;
      }
      .profileBtn {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        vertical-align: top;
        padding: 0;
        margin-right: 11px;
        @media screen and (max-width: 1199px) {
          margin-right: 0;
        }
        .profileIcon {
          font-size: 26px;
        }
        .avatarBorder {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #e1e2e3;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          .avatarImage {
            background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png), url(https://static.wanted.co.kr/images/profile_default.png);
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        .stateBox {
          top: 0px;
          left: 23px;
        }
      }
    }
    .leftDivision {
      display: inline-flex;
      @media screen and (max-width: 991px) {
        display: none;
      }
      ::before {
        display: block;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: auto 10px;
      }
      .dashboardBtn {
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin-left: 15px;
        font-weight: 400;
        @media screen and (max-width: 1199px) {
          margin: 0;
        }
      }
    }
    .hidden {
      @media screen and (min-width: 992px) {
        display: none;
      }
      .menuBtn {
        margin-right: 10px;
        padding-left: 10px;
        @media screen and (min-width: 768px) and (max-width: 991px) {
          margin-right: 0;
        }
      }
    }
  }
`
const Padding = styled.div`
  height: 50px;
  @media screen and (max-width: 991px) {
    height: 110px;
  }
`
const Body = styled.div`
  background-color: #fff;
  display: block;
  box-sizing: border-box;
  @media screen and (min-width: 1200px) {
    padding-top: 25px;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Header>
        <MainBar>
          <Nav>
            <NavTop>
              <div className='burger__logo'>
                <button className='burger'>
                  <img src='https://static.wanted.co.kr/images/icon-menu.png' alt='hambergerMenu' />
                </button>
                <a href='/' className='logo'>wanted</a>
              </div>
            </NavTop>
            <NavMenu>
              <li className='hidden'>
                <a href='/'>홈</a>
              </li>
              <li className='default'>
                <a href='/'>채용</a>
              </li>
              <li className='default'>
                <a href='/'>이벤트</a>
              </li>
              <li className='more'>
                <a href='/'>직군별 연봉</a>
              </li>
              <li className='more'>
                <a href='/'>이력서</a>
              </li>
              <li className='more'>
                <a href='/'>커뮤니티<span className='state'>New</span></a>
              </li>
              <li className='more'>
                <a href='/'>프리랜서</a>
              </li>
              <li className='more'>
                <a href='/'>AI 합격예측<span className='state'>Beta</span></a>
              </li>
            </NavMenu>
            <NavAside>
              <ul>
                <li className='default'>
                  <button className='searchBtn'>
                    <AiOutlineSearch className='icon' />
                  </button>
                </li>
                <li className='default'>
                  <button className='notiBtn'>
                    <VscBell className='icon' />
                    <div className='stateBox'>
                      <span className='state'>N</span>
                    </div>
                  </button>
                </li>
                <li className='more profileBox'>
                  <button className='profileBtn'>
                    <div className='avatarBorder'>
                      <div className='avatarImage' />
                    </div>
                    <div className='stateBox'>
                      <span className='state'>N</span>
                    </div>
                  </button>
                </li>
                <li className='more leftDivision'>
                  <a className='dashboardBtn' href='/'>기업 서비스</a></li>
                <li className='hidden'>
                  <button className='menuBtn'>
                    <BiDotsHorizontalRounded className='icon' />
                  </button>
                </li>
              </ul>
            </NavAside>
          </Nav>
        </MainBar>
      </Header>
      <Padding />
      <Body>
        <Banner />
      </Body>
    </Wrapper>
  )
}

export default App;