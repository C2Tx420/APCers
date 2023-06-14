import React, { useEffect, useState } from 'react'
import { ShyftService } from '../../../services/shyft.service';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [nft,setnft] = useState('');
  const {id} = useParams();
  useEffect(()=>{
    (async()=>{
      // const nft = await ShyftService.getNftbyMint(id)
      setnft({
        "name": "APC 2",
        "symbol": "APC 2",
        "royalty": 10,
        "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
        "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
        "animation_url": "",
        "cached_animation_url": "",
        "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
        "description": "APC 2",
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
    })
      console.log(nft);
    })();
  },[])
  return (
    <div className="container">
      <div>{nft.name}</div>
    </div>
  )
}
