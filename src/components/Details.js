import React from 'react'
import styled from 'styled-components' 
import { FaRocket } from 'react-icons/fa';

const Wrapper = styled . div`
padding:5%;
background: url("./Reactimages/div.png");
.con{
    width:100%;
}
h6{
    color: #54b6f7;
    font-size:18px;  
}
.bu{ 
    height:52px;
    width:160px;
    z-index:2;
    position: absolute;
    color:white;
    background: #54b6f7;
    border:none;
    border-radius:5%;
}
.bur{ 
    height:60px;
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
@media(min-width:768px){
.de{
    display:flex;
    gap:8%;
    .con{
        width:60%;
        bottom:20px;
       
    }
    h6{
        
    }
}
}
`

function Details() {
    return(
   <Wrapper>
    <div className='de'>
<div>
    <h6>
        CONTACT US
    </h6>
    <h2>
        Ready To Transform Your Company? 
        <FaRocket size={24} />
    </h2>
    
    <div>       
    <button className="bu">Learn More</button>
    <button className="bur">Learn More</button>
 </div>
</div>
<div>
    <img src='./Reactimages/contact.png' className='con' alt=''  />
</div>
    </div>

   </Wrapper>
    )
}

export default Details