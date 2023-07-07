import React, { useContext, useEffect, useState } from 'react';
import './Home.scss';
import AmazeNFT from '../../components/AmazeNFT/AmazeNFT';
import SignUpNFT from '../../components/SignUpNFT/SignUpNFT';
import HumanCard from '../../components/HumanCard/HumanCard';
import Slider from 'react-slick';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ShyftService } from '../../services/shyft.service';
import useScrollTop from '../../hook/useScrollTop';
import { LoadingContext } from '../../context/LoadingContext';

export default function Home() {

  useScrollTop();

  const {setLoading} = useContext(LoadingContext);

  const [listNFT, setListNFT] = useState([
    {
      "network": "devnet",
      "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
      "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
      "price": 200,
      "currency_symbol": "MBE",
      "nft_address": "GrunSuAGXc1LwZfrRAGiuvNtp1t61KLVAvkJzJ4sPwrd",
      "nft": {
        "name": "APC 2",
        "symbol": "APC 2",
        "royalty": 10,
        "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
        "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
        "animation_url": "",
        "cached_animation_url": "",
        "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
        "description": "APC 2 lorem lorem APC 2 lorem lorem APC 2 lorem lorem APC 2 lorem loremAPC 2 lorem lorem APC 2 lorem lorem",
        "mint": "GrunSuAGXc1LwZfrRAGiuvNtp1t61KLVAvkJzJ4sPwrd",
        "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "creators": [
          {
            "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "share": 100,
            "verified": true
          }
        ],
        "collection": {},
        "attributes": {},
        "attributes_array": [],
        "files": [
          {
            "uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
            "type": "image/jpeg"
          }
        ],
        "external_url": "",
        "is_loaded_metadata": true,
        "primary_sale_happened": false,
        "is_mutable": true,
        "token_standard": "NonFungible"
      },
      "list_state": "3eiaPiiCmXoCzJABq1vYAnwBDXzfsHDS8DRTz5BvbGr4",
      "status": "active",
      "created_at": "2023-06-12T02:05:50.000Z",
      "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
    },
    {
      "network": "devnet",
      "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
      "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
      "price": 200,
      "currency_symbol": "MBE",
      "nft_address": "6UQP11U8fcL21542okj7hKWGJPd7bTYKEWuxctf1AiLT",
      "nft": {
        "name": "Chung",
        "symbol": "Chung",
        "royalty": 10,
        "image_uri": "https://nftstorage.link/ipfs/bafkreiare34pw4qgx3wndozvx3hh73u2zzpicvdtlq7bazi6zbrn7zxwym",
        "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreiare34pw4qgx3wndozvx3hh73u2zzpicvdtlq7bazi6zbrn7zxwym",
        "animation_url": "",
        "cached_animation_url": "",
        "metadata_uri": "https://nftstorage.link/ipfs/bafkreidq4c5ywxmg2iwqr3cjaaudzo2el2wci6dgzwuk3kxjsnb6hsum3y",
        "description": "Chung",
        "mint": "6UQP11U8fcL21542okj7hKWGJPd7bTYKEWuxctf1AiLT",
        "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "creators": [
          {
            "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "share": 100,
            "verified": true
          }
        ],
        "collection": {},
        "attributes": {},
        "attributes_array": [],
        "files": [
          {
            "uri": "https://nftstorage.link/ipfs/bafkreiare34pw4qgx3wndozvx3hh73u2zzpicvdtlq7bazi6zbrn7zxwym",
            "type": "image/jpeg"
          }
        ],
        "external_url": "",
        "is_loaded_metadata": true,
        "primary_sale_happened": false,
        "is_mutable": true,
        "token_standard": "NonFungible"
      },
      "list_state": "Gqvvsg2m5g4oBiDVqknHCYkgqoVTaWfEWYRDZekDsKE3",
      "status": "active",
      "created_at": "2023-06-12T02:07:37.000Z",
      "receipt": "8wNy1XsgjpkWkENm5pzVbSYEGzxinYjVkc2n8iuB3bh4"
    },
    {
      "network": "devnet",
      "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
      "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
      "price": 200,
      "currency_symbol": "MBE",
      "nft_address": "9bHeoKaM22d7EGaco8RCY85KuquEu8TeLSDWatvs65F8",
      "nft": {
        "name": "My",
        "symbol": "My",
        "royalty": 10,
        "image_uri": "https://nftstorage.link/ipfs/bafkreia7wyp26pbcc6oh3mvmsgk55xv6jxmgnpe5pwd6hr6kpqdxvpc6tu",
        "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreia7wyp26pbcc6oh3mvmsgk55xv6jxmgnpe5pwd6hr6kpqdxvpc6tu",
        "animation_url": "",
        "cached_animation_url": "",
        "metadata_uri": "https://nftstorage.link/ipfs/bafkreid4sofuitlwwbqnszikjzc42qiizblvy5ptf4k5eaqteghzi6fnja",
        "description": "My",
        "mint": "9bHeoKaM22d7EGaco8RCY85KuquEu8TeLSDWatvs65F8",
        "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "creators": [
          {
            "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "share": 100,
            "verified": true
          }
        ],
        "collection": {},
        "attributes": {},
        "attributes_array": [],
        "files": [
          {
            "uri": "https://nftstorage.link/ipfs/bafkreia7wyp26pbcc6oh3mvmsgk55xv6jxmgnpe5pwd6hr6kpqdxvpc6tu",
            "type": "image/png"
          }
        ],
        "external_url": "",
        "is_loaded_metadata": true,
        "primary_sale_happened": false,
        "is_mutable": true,
        "token_standard": "NonFungible"
      },
      "list_state": "Dw61u3Sf91Biu9qpFFN5SRDD49XLJcZMma61hEZd4jhC",
      "status": "active",
      "created_at": "2023-06-12T12:48:14.000Z",
      "receipt": "EAnm6BsVLbSTKuaCcV4SjnhsYbFZUk1G4BvDwn5k2kWs"
    },
    {
      "network": "devnet",
      "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
      "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
      "price": 200,
      "currency_symbol": "MBE",
      "nft_address": "9bHeoKaM22d7EGaco8RCY85KuquEu8TeLSDWatvs65F8",
      "nft": {
        "name": "My",
        "symbol": "My",
        "royalty": 10,
        "image_uri": "https://nftstorage.link/ipfs/bafkreia7wyp26pbcc6oh3mvmsgk55xv6jxmgnpe5pwd6hr6kpqdxvpc6tu",
        "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreia7wyp26pbcc6oh3mvmsgk55xv6jxmgnpe5pwd6hr6kpqdxvpc6tu",
        "animation_url": "",
        "cached_animation_url": "",
        "metadata_uri": "https://nftstorage.link/ipfs/bafkreid4sofuitlwwbqnszikjzc42qiizblvy5ptf4k5eaqteghzi6fnja",
        "description": "My",
        "mint": "9bHeoKaM22d7EGaco8RCY85KuquEu8TeLSDWatvs65F8",
        "owner": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "update_authority": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
        "creators": [
          {
            "address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "share": 100,
            "verified": true
          }
        ],
        "collection": {},
        "attributes": {},
        "attributes_array": [],
        "files": [
          {
            "uri": "https://nftstorage.link/ipfs/bafkreia7wyp26pbcc6oh3mvmsgk55xv6jxmgnpe5pwd6hr6kpqdxvpc6tu",
            "type": "image/png"
          }
        ],
        "external_url": "",
        "is_loaded_metadata": true,
        "primary_sale_happened": false,
        "is_mutable": true,
        "token_standard": "NonFungible"
      },
      "list_state": "Dw61u3Sf91Biu9qpFFN5SRDD49XLJcZMma61hEZd4jhC",
      "status": "active",
      "created_at": "2023-06-12T12:48:14.000Z",
      "receipt": "EAnm6BsVLbSTKuaCcV4SjnhsYbFZUk1G4BvDwn5k2kWs"
    }
  ])

  useEffect(() => {
    (async () => {
      setLoading(true);
      try{
      // const getListNFT = await ShyftService.getActiveListings()
      // setListNFT(getListNFT.data)
      // console.log(getListNFT.data)
      } catch(e) {
        console.log(e)
      }
      setLoading(false);
    })();
  }, [])

  const teamlist = [
    // { name: 'Chung Từ', role: 'Supporter', img: '/assets/img/team/chung.png' },
    { name: 'Mỷ Trần', role: 'Team Lead', img: '/assets/img/team/my.jpg' },
    { name: 'Thịnh Lưu', role: 'Member', img: '/assets/img/team/tthinh.jpg' },
    { name: 'Thịnh Nguyễn', role: 'Member', img: '/assets/img/team/xthinh.jpg' },
    { name: 'Thông Võ', role: 'Member', img: '/assets/img/team/thong.jpg' },
    { name: 'Tài Huỳnh', role: 'Member', img: '/assets/img/team/tai.jpg' },
    { name: 'Vinh Đỗ', role: 'Member', img: '/assets/img/team/vinh.jpg' },
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
      {/* <section className="airdrop-section container">
        <AirdropComponent />
      </section> */}
      <section className="amaze-section container-fluid">
        <AmazeNFT />
      </section>
      <section className="signup-section container">
        <SignUpNFT />
      </section>
      <section className="market-section container-fluid">
        <h3>Marketplace</h3>
        <div className="product-list container">
          {listNFT && listNFT.map((itemData, idx) => (
            <ProductCard data={itemData} key={idx} />
          ))}
        </div>
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
