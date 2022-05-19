import React, { useState,useContext } from 'react'
import Rating from './components/Rating';
import Modal from './components/Modal';
import { GlobalStyle } from './styles/globalStyles'

const rateContext = React.createContext()

function App() {
  const [rate, setRate] = useState(0)
  const [display,setDisplay] = useState(false)
  
  return (
    <rateContext.Provider value={{rate,setRate,display,setDisplay}}>
      <GlobalStyle />
      <Rating />
      <Modal />
    </rateContext.Provider>
  );
}

export const useGlobal = () => {
  return useContext(rateContext)
}

export {rateContext}

export default App;
