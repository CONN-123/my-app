import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 5%;
background-color: ghostwhite;
img{
  
    
}
h6{
    text-align:center;
}
.V{
    padding: 2rem 8% 7rem
}
h2{
    text-align:center;
    font-size:33px;
}
p{
    text-align:center;  
    font-size:15px;
}
.si{
    background-color:white;
    border-radius:9%

}
.Q{
    height:auto;
    max-width:100%;
}
.a{
text-decoration:underline;
margin-top:-50px;
text-align:center;
}
.im4{
    width: 15%;
    padding-right:5px ;
    position:absolute;
}
@keyframes fade {
        0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-100px);
  }
  10% {
    transform: translateY(0);
  }
  }
  .Q:hover{
    animation:fade 1s ease-in-out;
  }
@media(min-width:667px){
 .V{
    display: flex;
    gap:2%;
    
 }   
}
`;

function Payroll() {

    return (
        <Wrapper>
            <div className="zalo">
                <div className="sminofu">
                    <h6>Benefits of working with us</h6>
                    <h2 className="pay1" >Getting started <img src="Reactimages/line.png" className="im4" alt="image"/> <br/> is as easy as 1,2,3...</h2>
                    <p className="pay2">We pledge to provide you with an exceptional service
                        experience based on our core service focus.</p>
                </div>
                <div className="V">
                    <div className="sii">
                        <div>
                            <h5>Individual Attention</h5>
                        </div>
                        <div className="react">
                            <p>Confined payroll systemis a superior productdedicated team vastly experienced in payroll solutions equipped
                                with the necessary skills and experience to give efficient, easy and flexible
                                payroll management solutions that suits every business.</p>
                        </div>
                    </div>

                    <div className="si">
                        <div>
                        <h5>Quick Response</h5>
                            <img src="./Reactimages/service2.png" className="Q" alt="payroll" />
                        </div>
                        <div className="react">
                            <p>Confined payroll systemis a superior productdedicated team vastly experienced in payroll solutions equipped
                                with the necessary skills and experience to give efficient, easy and flexible
                                payroll management solutions that suits every business.</p>
                        </div>
                    </div>
                    <div className="sii">
                        <div>
                        <h5>Proactivity</h5>
                        </div>
                        <div className="react">
                            <p>Confined payroll systemis a superior productdedicated team vastly experienced in payroll solutions equipped
                                with the necessary skills and experience to give efficient, easy and flexible
                                payroll management solutions that suits every business.</p>
                        </div>
                    </div>
                </div>
                <a><p className="anc">read more</p></a>
            </div>
        </Wrapper >
    )
}


export default Payroll