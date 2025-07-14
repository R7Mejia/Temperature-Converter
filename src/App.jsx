import { useState } from 'react'
import Converter from './components/Converter'
import CopyRight from './components/CopyRight'
import Footer from './components/Footer'

function App() {
  const [celcius, setCelcius] = useState("")
  const [farenheit, setFarenheit] = useState("")

  const convertTemperature = () => {
    const celciusValue = Number(celcius);
    !isNaN(celciusValue) ? setFarenheit(celciusValue * 9 / 5 + 32) : null; 
  };

  return (
    <>
      
      <Converter />
      <div className="container">
        <input 
          type='text'
          placeholder='Enter temperature in °C'
          value={celcius}
          onChange={(e) => setCelcius(e.target.value)}
        />
        <button onClick={convertTemperature}>Convert to °F</button>
        <br />
        {farenheit && (
          <h2 key={farenheit}>
            {farenheit > 105 ? (<span style={{ color: 'darkred' }}> {`🔥`} {farenheit}°F {'¡adios!'}</span>)
              : farenheit > 85 ? (<span style={{ color: 'red' }}> {`🥵`} {farenheit} °F</span>)
                : farenheit >= 75 ? (<span style={{ color: 'yellow' }}> {`🤠`} {farenheit} °F</span>)
                  : (<span style={{ color: 'lightblue' }}> {`🥶`} {farenheit}°F</span>
            )}
          </h2>
        )}


      </div>
      <Footer />
      <CopyRight />
    </>
  )
}

export default App
