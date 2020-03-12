import React, { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

interface Props {
  className?: string
  onClick?: () => void
  onClose?: () => void
}

export function Item({
  className,
  onClick,
  onClose,
  children
}: PropsWithChildren<Props>) {
  return (
    <div className={cn(styles.wrap, className)} onClick={onClick}>
      <header className={styles.header}>
        <button className={cn(styles.btn, styles.close)} onClick={onClose} />
        <button className={cn(styles.btn, styles.collapse)} />
        <button className={cn(styles.btn, styles.full)} />
      </header>
      {children}
    </div>
  )
}
