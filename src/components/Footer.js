import React from "react";
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Wrapper = styled.div`
padding:5%;
background: #54b6f7;

p{
    color: white;
}
.uuu{
    display:flex; 
list-style:none;
    li{
  
        a{
         color   :white ;
        }
}
}
.fa{
    color: white;
    position: absolute;
    
}
.faa{
    color: white; 
     
}
.uuu{
    gap: 2%;
}
@keyframes dropDown {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
}

.fa:hover {
  animation: dropDown 1s ease-in-out;
}
.faa:hover {
  animation: dropDown 1s ease-in-out;
}
@media(min-width:667px){
    .foot{
        display: flex;
    }
    .faa{
    color: white; 
     margin-left:290px ; 
}
    .piza{
      line-height:80px;
    }
    ul{
        gap: 2%;
    }
    .payi{
        margin-left:176px ;   
    }
}

`
function Footer() {
return(
 <Wrapper>
<div className="foot">
    <div>
        <p>Intelligent Solutions That Work Overtime For 
        Yielding Results That Really Matter To Your Business.</p>
        <p className="piza">
            @.All rights reserved.2023 Confide Pay.Built by Revixions Creative Studio
        </p>
        </div>
    <div>
        <ul className="uuu">
            <li>
                <a>AboutUs</a>
            </li>
            <li>
                <a>Services</a>
            </li>
            <li>
                <a>Founder</a>
            </li>
            <li>
                <a>Testimonials</a>
            </li>
           
        </ul>
        <div>
        <i className="faa"><FaLinkedin size={24} /></i>
            <i className="fa"><FaFacebook size={24} /></i>
        </div>
        <p className="payi">All rights reserved</p>
        
    </div>
</div>

</Wrapper>    
)

}

export default Footer













