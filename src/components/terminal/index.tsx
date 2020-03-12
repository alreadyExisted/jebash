import React, {
  useCallback,
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
  ReactNode
} from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import { Item } from '../item'

interface Props {
  toggleCommands: () => void
}

export function Terminal({ toggleCommands }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [history, setHistory] = useState<ReactNode[]>([])
  const [text, setText] = useState('')
  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value),
    [setText]
  )
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const _text = text.trim()

      if (_text === '') {
        setHistory(state => [...state, ''])
        setText('')
        return
      }

      const [command] = _text.split(' ')

      switch (command) {
        case 'clear':
          setHistory([])
          break
        case 'help':
          setHistory(state => [...state, 'help'])
          toggleCommands()
          break
        default: {
          setHistory(state => [...state, `jebash: "${text}" command not found`])
        }
      }
      setText('')
    },
    [text, setText, setHistory, toggleCommands]
  )
  useEffect(() => {
    focusInput()
  }, [focusInput])
  return (
    <section className={styles.wrap}>
      <p className={styles.help}>
        enter <b>help</b> command
      </p>
      <Item className={styles.terminal} onClick={focusInput}>
        <div className={styles.body}>
          {history.map((line, index) => (
            <div key={index} className={styles.line}>
              <Source />
              <div className={styles.line}>{line}</div>
            </div>
          ))}
          <div className={cn(styles.line, styles.editable)}>
            <Source />
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                className={styles.input}
                value={text}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </Item>
    </section>
  )
}

function Source({ name = 'guest' }: { name?: string }) {
  return (
    <div className={styles.source}>
      <span className={styles.name}>{name}</span>:~$
    </div>
  )
}
