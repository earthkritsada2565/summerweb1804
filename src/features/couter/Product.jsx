import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insert, remove } from './product/ProductSlice'

export default function Product() {
    const productSelecter = useSelector(state => state.products.product)
    const productDispath = useDispatch()
    const [productdetail, setProductdetail] = useState('')
    const [productPrice, setProductPrice] = useState(0)

    function proid(){
        const productid = productSelecter.length === 0 ? 1 : productSelecter[productSelecter.length - 1].id + 1
        const productNew = {id:productid,name:productdetail,price:Number(productPrice)}
        productDispath(insert(productNew))
    }

    function removepro(id){
        productDispath(remove(id))
    }
  return (
    <div>
      <label htmlFor="">Product name</label>
      <input type="productName" onChange={e=>setProductdetail(e.target.valu)}/><br />
      <label htmlFor="">price</label>
      <input type="price" onChange={e=>setProductPrice(e.target.value)}/><br />
      <button onClick={proid}>add</button>
    
      <ui>
        {productSelecter.map(pro => (<li key={pro.id}>
            {pro.id}{pro.name}{pro.price}
            <button onClick={()=>removepro(pro.id)}>delete</button>
        </li>))}
        
      </ui>



    </div>
  )
}


