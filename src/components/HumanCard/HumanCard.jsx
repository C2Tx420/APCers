import "./HumanCard.scss";
import img1 from "../../assets/img/ava1.jpeg";

export default function HumanCard() {
  return (
    <div>
 
      <div>
        <hr className="HumanCard-line1" />
      </div>

     
      <div className="HumanCard-about">
        {" "}
        <p>ABOUT US</p>
      </div>
      <div className="HumanCard-para1">
        {" "}
        Welcome our website, this is my team members from APCers{" "}
      </div>
    
     <div className='HumanCard-container'>
     <div>
                <div className='HumanCard-box1'>
                  <div className='Humancard-topbox1'>
                    <img src={img1} alt="" />
                    </div>
                   <div className='Humancard-botbox1'>
                <p className="Humancard-namebox1">Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                <p>Contact:</p>
                 <br />  
                </div>
                </div>
             </div>
             <div>
                <div className='HumanCard-box2'>
                  <div className='Humancard-topbox2'>
                    <img src={img1} alt="" />
                    </div>
                   <div className='Humancard-botbox2'>
                <p className='Humancard-namebox2'>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                <p>Contact:</p>
                 <br />  
                </div>
                </div>
             </div>
            {/* member3 */}
            <div>
                <div className='HumanCard-box3'>
                  <div className='Humancard-topbox3'>
                    <img src={img1} alt="" />
                    </div>
                   <div className='Humancard-botbox3'>
                <p className='Humancard-namebox3'>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                <p>Contact:</p>
                 <br />  
                </div>
                </div>
             </div>
            {/* member 4 */}
             <div>
                <div className='HumanCard-box4'>
                  <div className='Humancard-topbox4'>
                    <img src={img1} alt="" />
                    </div>
                   <div className='Humancard-botbox4'>
                <p className='Humancard-namebox4'>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                <p>Contact:</p>
                 <br />  
                </div>
                </div>
             </div>
            {/* member 5 */}
            <div>
                <div className='HumanCard-box5'>
                  <div className='Humancard-topbox5'>
                    <img src={img1} alt="" />
                    </div>
                   <div className='Humancard-botbox5'>
                <p className='Humancard-namebox5'>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                <p>Contact:</p>
                 <br />  
                </div>
                </div>
             </div>


      </div>
    </div>
  );
}


