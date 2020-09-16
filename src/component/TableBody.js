import React from 'react'
import PropTypes from 'prop-types'

const TableBody = ({ updateData, people }) => {
  const deletePerson = (firstName, secondName) => {
    localStorage.removeItem(`${firstName} ${secondName}`)
    updateData(true)
  }
  return (
    <tbody>
      {people.map(person => (
        <tr key={`${person.phone} ${person.firstName}`}>
          <th scope="row">{person.firstName}</th>
          <td>{person.secondName}</td>
          <td>+380 {person.phone}</td>
          <td>{person.gender}</td>
          <td>{person.age}</td>
          <td className="button-field">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => deletePerson(person.firstName, person.secondName)}>&#215;
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  updateData: PropTypes.func,
  people: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }))
}

export default TableBody
