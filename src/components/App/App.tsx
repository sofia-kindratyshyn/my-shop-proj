import { keepPreviousData, useQuery } from '@tanstack/react-query'
import Header from '../Header/Header'
import ProductList from '../ProductList/ProductList'
import css from './App.module.css'
import { fetchProducts } from '../services/serviceProd'
import type { Product } from '../types/product'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { ClipLoader } from 'react-spinners'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function App() {
  const [searchedValue, setSearchedValue] = useState('')
  const [debouncedText] = useDebounce(searchedValue, 300)
  const [prodInBascket, setProdInBascket] = useState(0)

  const { data, isSuccess, isLoading, isFetching, isError, refetch } = useQuery<Product[]>({
    queryKey: ['product', debouncedText],
    queryFn: () => fetchProducts(debouncedText),
    placeholderData: keepPreviousData,
  })

  function getValue(value: string) {
    setSearchedValue(value.trim())
  }

  const handleRetry = () => {
    refetch()
  }

  const bascketProducts = (val: number) => {
    let value = 0
    value += val
    setProdInBascket(value)
  }

  return (
    <div>
      <header className={css.hdr}>
        <Header productsInBascket={prodInBascket} />
      </header>
      {isError && <ErrorMessage reload={handleRetry} />}
      {data && isSuccess && (
        <ProductList
          products={data}
          getValue={getValue}
          value={searchedValue}
          addProduct={bascketProducts}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {isLoading && isFetching && <ClipLoader color='#4737b3' />}
      </div>
    </div>
  )
}
