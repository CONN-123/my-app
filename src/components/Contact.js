import React from "react";
import styled from 'styled-components'
import hero from '../../src/'


const Wrapper = styled.div`
padding: 5%;
// display:flex;
.logs{
    display: flex;
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
    .trust{
        display: flex;
    }
    
    .name-input{
    border:none;
    background-color:white;
    width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;

}
    .email-address{
    border:none;
    background-color:white;
    width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;

}
    .send-message{
    border:none;
    text-align:center;
    background-color:blue;
    width: 100%;
  padding: 10px;
  margin-bottom: 10px;
   border: none; 
  border-radius: 4px;
  margin-top: 30px ;

}
    .message{
    border:none;
    background-color:white;
    width: 80%;
  padding: 10px;
  margin-bottom: 10px;
   border: none; 
  border-radius: 4px;

}
.line{
    background-color:grey;
    width: 350px;
    /* margin-left: -120px;  */
}
@media(min-width:768px){
    .cont{
        display: flex;
        gap: 5%;
    }
    .send-message{
        color: white;
        text-align:center;
       font-weight:700;
        font-size:20px ;
        background: #210e80;
    }
    .line{
    background-color:grey;
    width: 370px;
}
.det{
    width:50%;
}
}
`;

function Contact() {
    return( 
    <Wrapper>
        
     <div> 
        <div>
<h6>CONTACT US</h6>
<h1>A dedicated solution for startups and enterprises</h1>
<div className="cont">
    <div>
    <form>
    <div> 
                    <input type="text" className='name-input' placeholder="name-input" />
                        </div>
                        <hr  className='line'/>
                        <div>   
                       <input type="text" className='email-address' placeholder="email-address" />
                       <hr  className='line'/>
                       <input type="text" className='message' placeholder="message" />
                       <hr  className='line'/>
                       <input type="text" className='send-message' placeholder="send-message" />
                         </div>

</form>
    </div>
    <div className="det">
        <h6>
            Contact Details
        </h6>
        <p>telephone: 3750-586584944-9575</p>
        <p>telephone: 3750-586584944-9575</p>
        <p>telephone: 3750-586584944-9575</p>
        <p>telephone: 3750-586584944-9575</p>
        <p>telephone: 3750-586584944-9575</p>
        <div>       
    <button className="bu">Learn More</button>
    <button className="bur">Learn More</button>
 </div>
    </div>
    
</div>

        </div>










    
    

            </div>
            
        
            
   
        </Wrapper>
        
        )
        
}


export default Contact