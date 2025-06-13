import css from './SearchBox.module.css'

interface SearchBoxProps {
  getValue: (value: string) => void
  value: string
}
export default function SerchBox({ getValue, value }: SearchBoxProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    getValue(event.target.value)
  }
  return (
    <input
      className={css.search_input}
      value={value}
      onChange={handleChange}
      placeholder='Search...'
      name='search'
    ></input>
  )
}
