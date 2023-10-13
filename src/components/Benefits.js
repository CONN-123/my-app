import React from "react";
import styled from 'styled-components'
const Wrapper = styled.div`
padding: 5%;
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
    transform: translateX(-90px);
  }
  10% {
    transform: translateX(0);
  }
  }
  .bur:hover{
    animation:fade 1s ease-in-out;
  }
    .payy{
        width: 50%;
    }
    .imaz{
        width: 50%;
    }
    h5{
        color: blue;
    }
    h6{
        color: blue;
    }
    .im4{
        width: 40%;
        position: absolute;
        padding-bottom: 20px;
    }
    h5{
        font-size:20px;
    }
    h6{
        font-size:20px;
    }
    @keyframes dropDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}
.imaz:hover{
    animation: dropDown 1s ease-in-out;
}
    @media(min-width:768px){
        .mis{
            width: 80%;
            display: flex;
        }
        .imazz{
            /* width: 100%; */
            position: relative;
            
.imaz{
    width: 70%;
    position: absolute;
    bottom: -20%;
    right: 2%;
}
.payy{
        width: 100%;
    }
            
        }
        .payy{
        width: 80%;
    }
    .im4{
       width : 20% ;
    }
   
    }
`

function Benefits() {
    return( 
    <Wrapper>
        <div>
            <h5>Benefits of Payroll outsourcing</h5>
            <h1>Process your payrollbetter than the competition</h1>
        </div>
          <div className="mis">
            <div lassName="missy"> 
                <h6>OUR MISSION</h6> 
      <h1>Understand your company's growth in real time<img src="Reactimages/line.png" className="im4" alt="image"/></h1>
      <p>Our mission has been in operation since the year 2005 
        (as ECA Consultancy) with traditional clients
         like the Astra Group, Cairns Foods and Telecel.
          We still have these clients amongst many others, which
         show our commitment to quality and detail and customer satisfaction. 
         Our services and products are unequalled,
          highly customized and strictly clients.</p>
          <div>
    <button className="bu">Learn More</button>
    <button className="bur">Learn More</button>
 </div>
          </div>
           
 
    <div className="cus2">
 
 </div>
 <div className="imazz">
        <img src="./Reactimages/mission.png" className="payy" alt=""/>
        <img src="./Reactimages/payroll.png" className="imaz" alt=""/>

    </div>
 
    </div>
    
   
        </Wrapper>
        
        )
        
}


export default Benefits