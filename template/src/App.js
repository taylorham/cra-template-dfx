import React, { useEffect, useState, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'
// Import canisters:
import test from 'ic:canisters/test'

function App() {
  const [val, setVal] = useState()

  useEffect(() => {
    // Call a public function defined in the canister
    test.getValue().then((response) => {
      // Since the response is a BigNumber we need to stringify it
      setVal(response.toString())
    })
  }, [])

  const onIncrement = useCallback(async () => {
    // Call another public function
    await test.increment()
    // Get latest value from canister again
    const newValue = await test.getValue()
    setVal(newValue.toString())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Value received from IC canister: {val}</h2>
        <button onClick={onIncrement}>Increment</button>
      </header>
    </div>
  )
}

export default App
