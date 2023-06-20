import React, { useEffect, useState } from 'react'
import { ShyftService } from '../../../services/shyft.service';
import { useParams } from 'react-router-dom';
import './Detail.scss'
import Button from '../../../components/Button/Button';
import ProductCard from '../../../components/ProductCard/ProductCard';

export default function Detail() {
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      // const nft = await ShyftService.getNftbyMint(id)
      setProduct({
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
      },)
      sortRelated([
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
        ]
      )
    })();
  }, [])
  const sortRelated = (list) => {
    const sortList = [...list].filter(item => item.nft_address !== id);
    setRelated(sortList);
  }
  return (
    <main className='detail-page container'>
      <h2 className='detail__title'>Detail Page</h2>
      {product &&
        <div className="product">
          <div className='product__img-wrapper'>
            <img className='product__img' src={product.nft.image_uri} alt="picture" />
          </div>

          <div className='product__info'>
            <p className='product__info-title'> {product.nft.name} </p>
            <p className='product__info-desc'> {product.nft.description}</p>
            <p className='product__info-price'> {product.price}<span>{product.currency_symbol}</span></p>
            <Button className="product__info-btn">Buy now</Button>
          </div>
        </div>
      }
      <div className="related">
        <h2 className='detail__title'>Related</h2>
        <div className="related__wrapper">
          {related && related.map((itemData, idx) => (
            <ProductCard data={itemData} key={idx} />
          ))}
        </div>
      </div>










    </main>
  )
}