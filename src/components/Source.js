import React from "react";
import styled from 'styled-components'



const Wrapper = styled.div`
/* padding: 5%; */
// display:flex;
.pay{
    width:50%;
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
        background: white;
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
  @keyframes dropDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}
.pa:hover{
    animation: dropDown 1s ease-in-out;
}
    .paya{
        background:#210e80 ;
    }
    h6{
        color: white;
        font-size:18px;
    }
    h1{
        color: white;
        font-size:25px;
    }
    p{
        color: white;
    }
    li{
        color: white;
    }
    @media(min-width:768px){
     .payy{
        display: flex;
     } 
     .pay{
        width: 100%;
        height: 560px;
     }  
     .paya{
        padding: 5%;
        width: 50%;
     }
    }
`;

function Source() {
    return( 
    <Wrapper>
          <div className="payy">
            <div  className="pa"> 
                  <img src="./Reactimages/benefit.png" className="pay" alt="about" />
                  </div>
                  <div className="paya">
                  <h6>WHY OUTSOURCE?</h6>
      <h1>ConfidePay Bureu Service-An outsourced payroll management service</h1>
      <p>A world wide practice recognised for :</p>
      <ul>
        <li>
            <p>Improving Efficiencies – gaining outside expertise</p>
        </li>
        <li>
            <p>Reducing costs</p>
        </li>
        <li>
            <p>Achieving legislative compliance on Payrolls – avoid penalties</p>
        </li>
      </ul>
 
 <div>
    <button className="bu">Learn More</button>
    <button className="bur">Learn More</button>
 </div>

                  </div>
                  
    </div>
   
        </Wrapper>
        
        )
        
}


export default Source