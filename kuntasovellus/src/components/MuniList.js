import React from 'react'

// Component responsible for the list containing shown municipalities
const MuniList = ({ muniArray }) => {
  // Style for list
  const listStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: '4px',
    width: '250px'
  }
  // Style for list items
  const itemStyle = {
    font: '200 20px/1.5 Helvetica, Verdana, sans-serif',
    borderBottom: '1px solid #ccc'
  }
  // Sorting the municipalities alphabetically, accounting for 'å','ä' and 'ö' as well
  const sortedMunis = muniArray.sort((a, b) =>
    a.name.localeCompare(b.name, 'fi', { sensitivity: 'accent' })
  )

  // List structure and contents. List items are created by mapping the sorted municipalities
  return (
    <>
      <ul style={listStyle}>
        {sortedMunis.map(municipality => (
          <li style={itemStyle} key={Math.random() * 1000}>
            {municipality.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MuniList
