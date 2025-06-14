import css from './Header.module.css'
import Badge from 'react-bootstrap/Badge'
import { FaShoppingBasket } from 'react-icons/fa'
import type { Product } from '../types/product'
import { useState } from 'react'
import BascketModal from '../BascketModal/BascketModal'

interface HeaderProps {
  productsInBascket: number
  getProdToBascket: Product[]
}

export default function Header({ productsInBascket, getProdToBascket }: HeaderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function onClose(val: boolean) {
    setModalIsOpen(val)
  }
  return (
    <div className={css.container}>
      <h1 className={css.logo}>DUMMYj</h1>
      <div className={css.flexed}>
        <ul className={css.hdr_links_list}>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Users</a>
          </li>
        </ul>
        <button>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <FaShoppingBasket size={24} onClick={() => setModalIsOpen(true)} />
            <Badge bg='danger' style={{ position: 'absolute', top: -5, right: -10 }}>
              {productsInBascket}
            </Badge>
            {modalIsOpen && (
              <BascketModal choosedProducts={getProdToBascket} setIsClosed={onClose} />
            )}
          </div>
        </button>
      </div>
    </div>
  )
}
