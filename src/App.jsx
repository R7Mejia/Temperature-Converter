import { useState } from 'react'
import Converter from './components/Converter'
import CopyRight from './components/CopyRight'
import Footer from './components/Footer'

function App() {
  // State for temperature values
  const [celcius, setCelcius] = useState("")
  const [farenheit, setFarenheit] = useState("")
  // State for conversion direction: 'CtoF' or 'FtoC'
  const [conversionType, setConversionType] = useState('CtoF')

  // Function to handle conversion based on selected type
  const convertTemperature = () => {
    if (conversionType === 'CtoF') {
      const celciusValue = Number(celcius);
      if (!isNaN(celciusValue)) {
        setFarenheit((celciusValue * 9 / 5 + 32).toFixed(2));
      }
    } else {
      const farenheitValue = Number(farenheit);
      if (!isNaN(farenheitValue)) {
        setCelcius(((farenheitValue - 32) * 5 / 9).toFixed(2));
      }
    }
  };

  // Function to reset both fields when switching conversion type
  const handleConversionTypeChange = (e) => {
    setConversionType(e.target.value);
    setCelcius("");
    setFarenheit("");
  };

  return (
    <>
      <Converter />
      <div className="container">
        {/* Conversion type selector */}
        <div className="conversion-selector">
          <label>
            <input
              type="radio"
              value="CtoF"
              checked={conversionType === 'CtoF'}
              onChange={handleConversionTypeChange}
            />
            Celsius to Fahrenheit
          </label>
          <label>
            <input
              type="radio"
              value="FtoC"
              checked={conversionType === 'FtoC'}
              onChange={handleConversionTypeChange}
            />
            Fahrenheit to Celsius
          </label>
        </div>

        {/* Show input and result based on conversion type */}
        {conversionType === 'CtoF' ? (
          <>
            <input
              type='text'
              placeholder='Enter temperature in °C'
              value={celcius}
              onChange={(e) => setCelcius(e.target.value)}
            />
            <button onClick={convertTemperature}>Convert °C to °F</button>
            {/* Show result if available */}
            {farenheit && (
              <h2 key={farenheit}>
                {farenheit > 105 ? (<span style={{ color: 'darkred' }}> {`🔥`} {farenheit}°F {'¡adios!'}</span>)
                  : farenheit > 85 ? (<span style={{ color: 'red' }}> {`🥵`} {farenheit} °F</span>)
                    : farenheit >= 75 ? (<span style={{ color: 'yellow' }}> {`🤠`} {farenheit} °F</span>)
                      : (<span style={{ color: 'lightblue' }}> {`🥶`} {farenheit}°F</span>
                      )}
              </h2>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter temperature in °F"
              value={farenheit}
              onChange={(e) => setFarenheit(e.target.value)}
            />
            <button onClick={convertTemperature}>Convert °F to °C</button>
            {/* Show result if available */}
            {celcius && (
              <h2 key={celcius}>
                {celcius > 40 ? (<span style={{ color: 'darkred' }}> {`🔥`} {celcius}°C {'¡adios!'}</span>)
                  : celcius > 30 ? (<span style={{ color: 'red' }}> {`🥵`} {celcius} °C</span>)
                    : celcius >= 25 ? (<span style={{ color: 'yellow' }}> {`🤠`} {celcius} °C</span>)
                      : (<span style={{ color: 'lightblue' }}> {`🥶`} {celcius}°C</span>
                      )}
              </h2>
            )}
          </>
        )}
      </div>
      <Footer text="Temperature Converter App © 2025. All rights reserved." />
      <CopyRight />
    </>
  )
}

export default App
