import React , { useState }from "react";
import styled from 'styled-components'
// import theme from './theme';
import { Link,animateScroll as scroll } from 'react-scroll';

const Wrapper = styled.header`
    position:absolute;
    display:flex;
    transition: all 300ms ease;
    width:100%;
    z-index:999;
    transition:all 300ms ease;
    justify-content:space-between;
    align-items:center;
    transform:translate3d(0, 0, 0);
    @media(min-width:992px){
        padding-top:30px;
    }
    img{
        width:70px;
        z-index:3;
        transition:all 0.7s ease;
        @media(min-width:992px){
            margin-left:5%;
        }
    }
    .menu{
        @media(min-width:992px){
            margin-right:5%;
        }
    }
    .hamburger{
      padding:20px 37px 20px 6px;
      outline:1px solid #fff;
      position: relative;
      margin-right:20px;
      transition:all 0.7s ease;
      z-index:3;
      
      @media(min-width:992px){
          display:none;
      }
      span{
        width:30px;
        height:1px;
        background:#fff;
        position:absolute;
        transition:all 0.7s ease;
        &:before{
          position: absolute;
          content:"";
          background: #fff;
          top:-5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
        &:after{
          position: absolute;
          content:"";
          background: #fff;
          top:5px;
          height:100%;
          width:100%;
          transition:all 0.7s ease;
        }
      }
    }
    .open{
        outline-color:#000;
        span{
            background:transparent;
            &:after{
                top:0;
                transform:rotate(-585deg);
                background:#000;
            }
            &:before{
                top:0;
                transform:rotate(-495deg);
                background:#000;
            }
        }
    }
    ul{
      
        position:absolute;
        width:100%;
        height:100vh;
        background:#fff;
        top:0;
        right:0;
        display:flex;
        transition:all 0.7s ease;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        z-index:1;
        max-width:0;
        overflow:hidden;
        padding:0;
        margin-top:0;
        
        li{
          list-style:none;
        }
        @media(min-width:768px){
            height:720px;
            
        }
       @media(min-width:992px){
           max-width:none;
           background:transparent;
           flex-direction:row;
           height:unset;
            position:relative;
            margin-right:5%;
       }
       
        li{
            &:hover{
                a{
                    color:green;
                }
            }
            @media(min-width:992px){
                margin:0 10px;
                &:hover{
                   a{
                    color:white;
                    text-decoration:underline;
                   }
                }
            }
            a{
                font-family:green;
                display:block;
                padding:20px;
                cursor:pointer;
                transition:all 0.7s ease;
                width:max-content;
                
                @media(min-width:992px){
                    color:#54b6f7;
                }
            }
            &:last-child{
              @media(min-width:992px){
                 max-height:40px;
                margin-left:30px;
              }
               

                a{
                    @media(min-width:992px){
                        padding:10px 30px;
                        background:#fff;
                        border:1px solid #fff;
                        color:green;
                   &:hover{
                       background:transparent;
                       color:white;
                   }
                    }
                }
            }
            &:last-child{

            }
        }
    }
    .change{
        max-width:100%;

    }
`;

function Head() {
  const [click, setClick] = useState(false);

  window.onscroll = () => {
    setClick(false);
  };

  return (
    <Wrapper >
      <img src="./Reactimages/logo.png" alt="logo" />
      <div className="menu">
        <div className={click ? "hamburger open" : "hamburger"} onClick={() => setClick(!click)}>
          <span></span>
        </div>
        <ul className={click ? "change" : ""}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              products&services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
            Resources
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}



    




export default Head