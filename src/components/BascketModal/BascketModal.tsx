import { createPortal } from 'react-dom'
import css from './BascketModal.module.css'
import type { Product } from '../types/product'

interface BascketModalProps {
  choosedProducts: Product[]
  setIsClosed: (val: boolean) => void
}

export default function BascketModal({ choosedProducts, setIsClosed }: BascketModalProps) {
  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      setIsClosed(false)
    }
  }
  return createPortal(
    <div className={css.backdrop} role='dialog' aria-modal='true' onClick={handleBackdropClick}>
      <div className={css.modal}>
        {choosedProducts.map(choosedProduct => {
          return <p>{choosedProduct.title}</p>
        })}
      </div>
    </div>,
    document.body
  )
}
