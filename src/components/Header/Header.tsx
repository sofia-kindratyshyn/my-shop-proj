import css from './Header.module.css'
import Badge from 'react-bootstrap/Badge'
import { FaShoppingBasket } from 'react-icons/fa'

interface HeaderProps {
  productsInBascket: number
}

export default function Header({ productsInBascket }: HeaderProps) {
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
            <FaShoppingBasket size={24} />
            <Badge bg='danger' style={{ position: 'absolute', top: -5, right: -10 }}>
              {productsInBascket}
            </Badge>
          </div>
        </button>
      </div>
    </div>
  )
}
