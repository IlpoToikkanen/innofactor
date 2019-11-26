import React, { useState, useEffect } from 'react'
import muniService from './services/muniService'
import MuniList from './components/MuniList'
import CountTable from './components/CountTable'

const App = () => {
  const [municipalities, setMunicipalities] = useState({})
  const [loading, setLoading] = useState(true)
  const [finnish, setFinnish] = useState(true)
  const [filter, setFilter] = useState('')

  // Fetching data on first render. Once loaded, sets "loading" false
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await muniService.getAll()
        setMunicipalities(data)
        setLoading(false)
      } catch {
        console.log('something went wrong fetching the data')
      }
    }
    fetchData()
  }, [])

  // Style for header
  const headerStyle = {
    font: '400 40px/1.5 Helvetica, Verdana, sans-serif',
    margin: 0,
    padding: 0
  }

  // Style for flex child elements, parent styled inline
  const childStyle = {
    display: 'inline-flex',
    border: 'solid 1px black'
  }

  // Returns the finnish list of municipalities if "finnish" = true, swedish if false
  const muniArray = () =>
    finnish ? municipalities.municipalitiesFi : municipalities.municipalitiesSv

  // Returns muniArray if no filter exists, otherwise returns the filtered array
  const muniFiltered = () =>
    filter ? muniArray().filter(item => item.name[0] === filter) : muniArray()

  // If data from API hasn't been fetched yet, renders a loading screen
  if (loading) {
    return <div>Loading content...</div>
  }
  // When loading = false, renders the actual content
  else {
    return (
      <>
        <h1 style={headerStyle}>List of Municipalities</h1>
        <button onClick={() => setFinnish(!finnish)}>
          {finnish ? 'Swedish names' : 'Finnish names'}
        </button>
        <div style={{ display: 'flex' }}>
          <div style={childStyle}>
            <MuniList muniArray={muniFiltered()} />
          </div>
          <div style={childStyle}>
            <CountTable muniArray={muniFiltered()} setFilter={setFilter} />
          </div>
        </div>
      </>
    )
  }
}

export default App
