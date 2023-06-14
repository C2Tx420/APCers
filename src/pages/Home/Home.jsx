import React from 'react';
import './Home.scss';
import AmazeNFT from '../../components/AmazeNFT/AmazeNFT';
import SignUpNFT from '../../components/SignUpNFT/SignUpNFT';
import HumanCard from '../../components/HumanCard/HumanCard';
import Slider from 'react-slick';

export default function Home() {
  const teamlist = [
    { name: 'Chung Từ', role: 'Supporter', img: '1tO9EElzDUpB4q2eMTc2xgKDzKZNWjNny' },
    { name: 'Mỷ Trần', role: 'Team Lead', img: '1s3iVHHaAk_AMCy8pazmAO9vMUwZ72N4G' },
    { name: 'Thịnh Lưu', role: 'Member', img: '1m5YNNr8gc-IZsbTy421vK-1_sGSehuca' },
    { name: 'Thịnh Nguyễn', role: 'Member', img: '16xcJVQAVntsy25DmfbLbAk0BiJ7NR4sg' },
    { name: 'Thông Võ', role: 'Member', img: '1B0C9ug_jusSA4T_z8uVeLA32O6gIeEGj' },
    { name: 'Tài Huỳnh', role: 'Member', img: '1nAvgUe28tX9Ak9Df4EdhkdjuePwBFVB0' },
    { name: 'Vinh Đỗ', role: 'Member', img: '10X1W_r7yZK4qii26BINGydyBpLertiVo' },
  ]

  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <main className="home">
      <section className="amaze-section container-fluid">
        <AmazeNFT />
      </section>
      <section className="signup-section container">
        <SignUpNFT />
      </section>
      <section className="team-section container-fluid">
        <h3>Our team</h3>
        <div className="teamlist container">
          <Slider {...sliderSetting}>
            {teamlist.map((person, idx) => (
                <HumanCard name={person.name} role={person.role} img={person.img} key={idx} />
            ))}
          </Slider>
        </div>
      </section>
    </main>
  )
}
