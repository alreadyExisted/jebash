import React from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import { Item } from '../item'

interface Props {
  isActive?: boolean
  setIsActive: () => void
}

export function Commands({ isActive, setIsActive }: Props) {
  return (
    <Item
      className={cn(styles.wrap, isActive && styles.isActive)}
      onClose={setIsActive}
    >
      <div className={styles.body}>
        Commands:
        <ul className={styles.commands}>
          <li>
            <span className={styles.command}>clear</span>
            <span>clear jebash history</span>
          </li>
        </ul>
      </div>
    </Item>
  )
}
