import { createPortal } from 'react-dom'
import css from './ProductModal.module.css'
import type { Product } from '../types/product'

interface ProductModalProps {
  product: Product
  setClosed: (val: boolean) => void
}

export default function ProductModal({ product, setClosed }: ProductModalProps) {
  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setClosed(false)
    }
  }

  return createPortal(
    <div className={css.backdrop} role='dialog' aria-modal='true' onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img className={css.modal_image} src={product.images[0]} alt={product.title}></img>
        <h3>{product.title}</h3>
        <p>Description: {product.description}</p>
        <p>{product.price} $</p>
        <span className={css.category}>{product.category}</span>
        <p>Brand: {product.brand}</p>
        <p>Rating: {product.rating}</p>
        <p>Availability: {product.availabilityStatus}</p>
        <p>Warranty Information: {product.warrantyInformation}</p>
        <p>Weight: {product.weight}</p>
        <button>Buy</button>
        <button> Add to favorite</button>
      </div>
    </div>,
    document.body
  )
}
