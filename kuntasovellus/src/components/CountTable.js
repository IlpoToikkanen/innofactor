import React from 'react'

// Component responsible for the table containing the alphabetically ordered municipality counts
const CountTable = ({ muniArray, filter, setFilter }) => {
  // Style for the table
  const tableStyle = {
    textAlign: 'center',
    font: '200 20px/1.5 Helvetica, Verdana, sans-serif'
  }
  // Style for table cells
  const cellStyle = {
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    padding: '4px',
    margin: 0
  }

  // Returns table rows with onClick filter functionality on first cell
  const rows = () => {
    const counts = {}
    // Counting and storing the municipality occurrence by first letter of name
    for (var i = 0; i < muniArray.length; i++) {
      var character = muniArray[i].name.substring(0, 1)
      counts[character] = counts[character] ? counts[character] + 1 : 1
    }
    // If a filter exists, shows the filter and count accordingly.
    if (filter) {
      return (
        <tr>
          <td style={cellStyle}>
            <span style={{ color: '#3D9970' }}>{filter}</span>
          </td>
          <td style={cellStyle}>{counts[filter] ? counts[filter] : 0}</td>
        </tr>
      )
    } else {
      // Mapping the counted objects by key and constructing rows to render
      return Object.keys(counts).map(item => (
        <tr key={item}>
          <td style={cellStyle} onClick={() => setFilter(item)}>
            <span style={{ color: '#3D9970' }}>{item}</span>
          </td>
          <td style={cellStyle}>{counts[item]}</td>
        </tr>
      ))
    }
  }

  // Table structure and contents with styles applied
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>Filter by</th>
          <th style={cellStyle}>Count</th>
        </tr>
      </thead>
      <tbody>
        {rows()}
        <tr>
          <td style={cellStyle}>
            <strong>Total</strong>
          </td>
          <td>{muniArray.length}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <button onClick={() => setFilter('')}>Reset filter</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default CountTable
