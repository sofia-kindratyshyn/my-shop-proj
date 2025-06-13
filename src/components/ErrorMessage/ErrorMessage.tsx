import css from './ErrorMessage.module.css'

interface ErrorMessageProps {
  reload: () => void
}

export default function ErrorMessage({ reload }: ErrorMessageProps) {
  return (
    <div className={css.load_container}>
      <p>Sorry, there was an error, please try again</p>
      <button onClick={reload} className={css.reload_btn}>
        Try Again
      </button>
    </div>
  )
}
