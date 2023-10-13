import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 5%;
background-color: ghostwhite;
img{
    
    
}
.V{
    padding: 2rem 8% 7rem;
    display:grid;
    gap:2%;
}
h2{
    text-align:center;
    font-size:33px;
}
p{
    text-align:center;  
    font-size:15px;
}
.sboe{
    background-color:white;
    border-radius:9%
    
}
.sboe:hover{
    transition: transform 0.3s ease-in-out; 

}
.Q{
    height:auto;
    max-width:100%
}
.a{
text-decoration:underline;
margin-top:-50px;
text-align:center;
}
.paya{
    padding: 5px 5px 10px 5px;
}
.anc{
    text-decoration:underline;
    line-height:1px;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

.sboe:hover {
  animation: bounce 1s ease-in-out;
}
@media(min-width:667px){
 .V{
    display: flex;
    gap:3%;
    padding: 3px 5px 10px 5px;
 }   
}
`;

function Services() {

    return (
        <Wrapper>
            <div className="zalo">
                <div className="sminofu">
                    <h2 className="Service1">Our Service Promise</h2>
                    <p className="service">We pledge to provide you with an exceptional service
                        experience based on our core service focus.</p>
                </div>
                <div className="V">
                    <div className="sboe">
                        <div>
                            <img src="./Reactimages/service2.png" className="Q" alt="payroll" />
                        </div>
                        <div className="react">
                            <div className="paya">
                                <p>Confined payroll systemis a superior productdedicated team vastly experienced in payroll solutions equipped
                                with the necessary skills and experience to give efficient, easy and flexible
                                payroll management solutions that suits every business.</p>
                                </div>
                            
                        </div>
                    </div>

                    <div className="sboe">
                        <div>
                            <img src="./Reactimages/service2.png" className="Q" alt="payroll" />
                        </div>
                        <div className="react">
                        <div className="paya">
                            <p>Confined payroll systemis a superior productdedicated team vastly experienced in payroll solutions equipped
                                with the necessary skills and experience to give efficient, easy and flexible
                                payroll management solutions that suits every business</p>
                        </div>
                        </div>
                    </div>
                    <div className="sboe">
                        <div>
                            <img src="./Reactimages/Brands/Promise.png" className="Q" alt="payroll" />
                        </div>
                        <div className="react">
                        <div className="paya">
                            <p>Confined payroll systemis a superior productdedicated team vastly experienced in payroll solutions equipped
                                with the necessary skills and experience to give efficient, easy and flexible
                                payroll management solutions that suits every business.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <a><p className="anc">read more</p></a>
            </div>
        </Wrapper >
    )
}


export default Services