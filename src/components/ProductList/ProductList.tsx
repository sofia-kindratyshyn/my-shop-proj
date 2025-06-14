import { useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import css from './ProductList.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import ProductModal from '../ProductModal/ProductModal'
import type { Product } from '../types/product'

interface ProductListProps {
  products: Product[]
  getValue: (value: string) => void
  value: string
  addProduct: (prod: number) => void
  getProdToBascket: (prod: Product) => void
}

export default function ProductList({
  products,
  getValue,
  value,
  addProduct,
  getProdToBascket,
}: ProductListProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [choosedProduct, setChosedProduct] = useState<Product>()

  function onClose(product: Product) {
    setIsOpen(true)
    setChosedProduct(product)
  }

  return (
    <div>
      <div className={css.search_container}>
        <h2>Products</h2>
        <SearchBox getValue={getValue} value={value} />
      </div>
      <div className={css.products_block}>
        <ul className={css.product_list}>
          {products.map(product => (
            <li key={product.id} className={css.product_list_item} onClick={() => onClose(product)}>
              <div className={css.image_card}>
                <LazyLoadImage
                  src={product.images[0]}
                  alt={product.title}
                  width={160}
                  effect='blur'
                />
                <p className={css.product_description}>{product.title}</p>
              </div>
              <div className={css.cost_card}>
                <p>{product.price} $</p>
                <span className={css.category}>{product.category}</span>
                <button
                  className={css.order_btn}
                  onClick={() => {
                    addProduct(1)
                    getProdToBascket(product)
                  }}
                >
                  Buy
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && choosedProduct && <ProductModal setClosed={setIsOpen} product={choosedProduct} />}
    </div>
  )
}
