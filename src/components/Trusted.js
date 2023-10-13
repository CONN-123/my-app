import React from "react";
import styled from 'styled-components'



const Wrapper = styled.div`
padding: 5%;
// display:flex;
.logs{
    display: flex;
    gap:5%;
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
  10% {
    transform: translateX(-100px);
  }
  10% {
    transform: translateX(0);
  }
  }
  .bur:hover{
    animation:fade 1s ease-in-out;
  }
    
    .trust{
        display: flex;
    }
    .loy{
        width: 10%;
        
    }
    @media(min-width:667px){
        .loy{
        width: 10%;
        
    }

    }
`;

function Trusted() {
    return( 
    <Wrapper>
     <div>
        <div>
            <h3>Trusted and Loved By</h3>
        <p>Intelligent solutions that work overtime for yielding 
            results that really matter tp uyour business</p>
            </div>
            <div  className="logs">
            <img src="./Reactimages/employ.png" className="loy" alt="employ" />
            <img src="./Reactimages/image 13.png" className="loy" alt="employ" />
            <img src="./Reactimages/logi.png" className="loy" alt="employ" />
            <img src="./Reactimages/image 15.png" className="loy" alt="employ" />
            <img src="./Reactimages/tele.png" className="loy" alt="employ" />
            <img src="./Reactimages/fabs.png" className="loy" alt="employ" />
                
            </div>
            <div className="logs">
            <img src="./Reactimages/astra.png"className="loy" alt="employ" />
            <img src="./Reactimages/Brands/1.png"className="loy" alt="employ" />
            <img src="./Reactimages/Brands/4.png"className="loy" alt="employ" />
            <img src="./Reactimages/Brands/3.png"className="loy" alt="employ" />
            <img src="./Reactimages/Brands/5.png"className="loy" alt="employ" />
            <img src="./Reactimages/Brands/5.png"className="loy" alt="employ" />
            
            </div>
            <div className="trust">
                <p>We work for a wide variety of clients in
                     both the private and public sectors</p>
                     <div>
    <button className="bu">Learn More</button>
    <button className="bur">Learn More</button>
 </div>

            </div>
            
        
        </div>    
   
        </Wrapper>
        
        )
        
}


export default Trusted