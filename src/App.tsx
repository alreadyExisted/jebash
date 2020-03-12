import React, { useState, useCallback } from 'react'
import { Terminal } from './components/terminal'
import { Commands } from './components/commands'

export default function App() {
  const [hasCommands, setHasCommands] = useState(false)
  const toggleHasCommands = useCallback(
    () => setHasCommands(state => !state),
    []
  )
  return (
    <>
      <Commands isActive={hasCommands} setIsActive={toggleHasCommands} />
      <Terminal toggleCommands={toggleHasCommands} />
    </>
  )
}
