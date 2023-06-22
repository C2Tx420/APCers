import { Form,  Button } from 'antd';
import {UnlockOutlined } from '@ant-design/icons'
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './CreateNFT.scss'
import imgbox1 from '../../assets/img/Create/yeah.png'
import imgbox2 from '../../assets/img/Create/group.png' 
import { Switch } from 'antd';
import { Select, Space } from 'antd';
const LoginForm = () => {

 



  
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  

  const handleUploadChange = (info) => {
    if (info.file.status === 'done') {
      console.log('Uploaded file:', info.file);
    }
  };

  return (
       <section>
            <p className='p-uploadfile'> Upload file</p>
        <Form.Item className='upload-nft' >
            <p>PNG,JPG,GIF,WEBP or Mp4 or 200mp</p>

        <Upload
          action="/upload-url"
          onChange={handleUploadChange} >
          <Button icon={<UploadOutlined />}>Browser</Button>
        </Upload>
      </Form.Item>
        <p className='p-selectmethod'>
            Select Method
        </p>
        <div className='btn-2box'>
            <div className='border-box1'>
            <button className='btn-box1'>
                <img className='img-box1' src={imgbox1} alt="" />
                <p> Price fixed</p>
            </button>
            </div>
            <div className='border-box2'>
            <button className='btn-box2'>
                <img className='img-box2' src={imgbox2} alt="" />
                <p> Open For Bird</p>
            </button>
            </div>
        </div>
        <div className='all-input'>
          <p className='p-price'>Price</p>
         <input placeholder='Enter the price for one item ( ETH ) ' className='input-1' type="text" />
        </div>

          <div className='unlock-box'>
         <p className='p-unlock'> < UnlockOutlined twoToneColor="#FF0000" />  Unlock one purchased   <Switch className='toggle1'  defaultChecked onChange={onChange} /></p>
         <p className='p-unlock1'>Unlock content after successful transation </p>
          </div>

          {/* Choose collection*/}
          <div className='input-choose'>
            <p className='p-choose'> Choose Collection</p>
            <p className='p-txt-unlock'>Unlock content successful transaction</p>


            <Space className='input-select'
    direction="vertical"
    style={{
      width: '600px',
    }}
  >
    <Select
      status="true"
      style={{
        width: '600px',
      }}
    />
    
  </Space>
          </div>
          <div className='all-input'>
          <p className='p-price'>Title</p>
         <input placeholder='e.g : Cryto Funk' className='input-1' type="text" />
        </div>

        <div className='all-input'>
          <p className='p-price'>Description</p>
         <input placeholder='e.g: this is limited item ' className='input-1' type="text" />
        </div>

        <div className='all-input'>
          <p className='p-price'>Royalties</p>
         <input placeholder='Suggested: 10%,20%,30% Maximun 70% ' className='input-1' type="text" />
        </div>



      </section>
    
  );
};

export default LoginForm;

