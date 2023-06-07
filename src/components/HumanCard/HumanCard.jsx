import "./HumanCard.scss";
import img1 from "../../assets/img/ava1.jpeg";


export default function HumanCard() {
  return (
    <div>
      {/* gioi thieu  */}
      <div>
        <hr className="line1" />
      </div>

     
      <div className="about">
        {" "}
        <p>ABOUT US</p>
      </div>
      <div className="para1">
        {" "}
        Welcome our website, this is my team members from APCers{" "}
      </div>
    
     <div className='container'>
        {/* member 1 */}
      <div className="box">
            <img src={img1} alt=""   />
            <p>Name:Trần Nhật Mỷ </p>
            <p>ID: 52210522 </p>
            <p>Position: TeamLead</p>
            
            <br />
      </div>
        {/* ------- */}
        {/* member 2 */}
        <div className='box2'>
            <img src={img1} alt=""   />
            <p>Name:Trần Nhật Mỷ </p>
            <p>ID: 52210522 </p>
            <p>Position: TeamLead</p>
            <br />
        </div>
            {/* member3 */}
            <div>
                <div className='box3'>
                <img src={img1} alt=""   />
                <p>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>

                 <br />
                  </div>
            </div>
            {/* member 4 */}
             <div>
                <div className='box4'>
                    <img src={img1} alt="" />
                <p>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                 <br />  
                </div>
             </div>
            {/* member 5 */}
            <div>
                <div className='box4'>
                    <img src={img1} alt="" />
                    <p>Name:Trần Nhật Mỷ </p>
                <p>ID: 52210522 </p>
                <p>Position: TeamLead</p>
                 <br />  
                </div>
            </div>


      </div>
    </div>
  );
}
