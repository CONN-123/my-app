import React from "react";
import styled from 'styled-components'



const Wrapper = styled.div`
padding: 5%;
// display:flex;
h6{
color: blue;
font-size: 20px;
}
    h1{
        font-size: 40px;
        text-align:center;
    }
    p{

    }
    img{
        width: 100%;
        position: relative;
        top:50%;
    }
    .cus{
        display: flex;
        gap: 15%;
    }
    .cus2{
        display: flex;
        gap: 15%;
    }
    .papy{
        background-color:#210e80;
        color: white;
        border-radius:5% ;
        height:100px;
        width:200px;
        text-align:center;
        font-size: 30px;
        font-weight:800;
        padding: 15px 15px ;
        position: absolute;
        bottom:-10%;
        margin-left:50px ;
    }
    .pay{
        position:relative;
    }
    .bu{height:52px;
        width:160px;
        z-index:2;
        position: absolute;
        color:white;
        background: #54b6f7;
        border:none;
        border-radius:5%;
    }
    .bur{height:60px;
        width:180px;
        z-index:2;
        margin-left:10px ;
        color:white;
        background: #210e80;
        border:none;
        border-radius:5%;
        margin-bottom:15px ;
    }
    @keyframes fade {
        0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-100px);
  }
  10% {
    transform: translateX(0);
  }
  }
  .bur:hover{
    animation:fade 1s ease-in-out;
  }
    .im4{
        width: 40%;
        padding-bottom: 40px;
    }
    .p1{
        padding-bottom:10px ;
    }
    @media(min-width:768px){
    .bout{
        display: flex;
    }
    .im4{
        width: 30%;
        padding-bottom: 40px;
    }
    .p2{
       
        margin-left:15% ;
    }
    .ig{
      width:300px;  
       height :450px ;
      top: 200px;
       
    }
    
    .papy{
        bottom: 320px;
    }
}
@media(min-width:1024px){
    .papy{
        bottom: 60px;
    }

}
@media(min-width:1200px){
    .papy{
        bottom: -130px;
        left:40px;
    }
    .ig{
      width:450px;  
       height :650px ;
      top: 200px;
       
    }
}
`;

function About() {
    return( 
    <Wrapper>
          <div className="bout">
            <div  className="pay"> 
                  <img src="./Reactimages/about.png" className="ig" alt="about" />
                  <p className="papy">10 + Years of experience</p>
                  </div>
                  <div className="p2"><h6>ABOUT US</h6>
      <h1>A dedicated solution for startups and enterprise<img src="Reactimages/line.png" className="im4" alt="image"/></h1>
      <p className="p1">ConfidePay (Pvt) Ltd is a leading payroll and HR solutions provider in Zimbabwe. We offer payroll 
        administration
         outsource service, payments administration, payroll software, payroll support, training and payroll 
        security mechanisms. We are dedicated to providing superior payroll and HR solutions customized to support 
        organizations of any size in Zimbabwe.
We have a dedicated team vastly experienced in payroll solutions equipped 
with the necessary skills and experience to give efficient, easy and flexible 
payroll management solutions that suits every business.
The company has been in operation since the year 2005 (as ECA Consultancy) with
 traditional clients like the Astra Group, Cairns Foods and Telecel. We still 
 have these clients amongst many others, which show our commitment to quality 
 and detail and customer satisfaction. Our services and products are unequalled, highly 
 customized and strictly confidential.</p>
 <div className="cus">
<div>
    <h4>99%</h4>
    <p>customer satisfaction</p>
    </div>
 <div>
 <h4>100+</h4>
    <p>monthly active user</p>
    </div>
    </div>
    <div className="cus2">
 <div>
 <h4>25+</h4>
 <p>new users per week</p>
 </div>
 <div>
    <button className="bu">Learn More</button>
    <button className="bur">Learn More</button>
 </div>
 </div>
</div>
                  
 
    </div>
   
        </Wrapper>
        
        )
        
}


export default About