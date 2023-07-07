import React, { useContext, useEffect, useState } from 'react'
import { ShyftService } from '../../../services/shyft.service';
import { useParams } from 'react-router-dom';
import './Detail.scss'
import Button from '../../../components/Button/Button';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { LoadingContext } from '../../../context/LoadingContext';

export default function Detail() {
  const {setLoading} = useContext(LoadingContext);
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      setLoading(true);
      try{
        setProduct({
          "network": "devnet",
          "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
          "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
          "price": 200,
          "currency_symbol": "MBE",
          "nft_address": "sample",
          "nft": {
            "name": "Sample",
            "symbol": "Sample",
            "royalty": 10,
            "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
            "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
            "animation_url": "",
            "cached_animation_url": "",
            "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
            "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
            "mint": "sample",
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
          "list_state": "sample",
          "status": "active",
          "created_at": "2023-06-12T02:05:50.000Z",
          "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
        })
        sortRelated([
          {
            "network": "devnet",
            "marketplace_address": "BxRyen3PgGj5h7ENbP9PzyxiRh5ERVyac1QkDKksqEhD",
            "seller_address": "2EDW3poG156KuZxN9jdgGVsLkKvBjnaRyod2ymxDRALd",
            "price": 200,
            "currency_symbol": "MBE",
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
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
            "list_state": "123123",
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
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
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
            "list_state": "123123",
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
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
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
            "list_state": "123123",
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
            "nft_address": "123123123",
            "nft": {
              "name": "Sample",
              "symbol": "Sample",
              "royalty": 10,
              "image_uri": "https://nftstorage.link/ipfs/bafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "cached_image_uri": "https://cdn.shyft.to/img/https%253A%252F%252Fnftstorage.link%252Fipfs%252Fbafkreihfbd6dxdh5ggbjrwfqdrfqp67h7yn3ls3fkye5x4ovms4e5xtexu",
              "animation_url": "",
              "cached_animation_url": "",
              "metadata_uri": "https://nftstorage.link/ipfs/bafkreifqgablzvf2xx6yjcdotfssfhnehi7k7jtadcqm22novnmf22gdpm",
              "description": "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem",
              "mint": "123123123",
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
            "list_state": "123123",
            "status": "active",
            "created_at": "2023-06-12T02:05:50.000Z",
            "receipt": "6vtVmjjNp8P4oFoYoZSjmwio81HDwVDzSAbYF9nvFjux"
          }
          ]
        )
        // const product = await ShyftService.getDetailNFTOfMarket(id);
        // const nftList = await ShyftService.getActiveListings();
        // setProduct(product);
        // sortRelated(nftList.data);
      } catch(e) {
        console.log(e)
      }
      setLoading(false);
    })();
  }, [])
  const sortRelated = (list) => {
    const sortList = [...list].filter(item => item.list_state !== id);
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
            <ProductCard className={'border'} data={itemData} key={idx} />
          ))}
        </div>
      </div>










    </main>
  )
}