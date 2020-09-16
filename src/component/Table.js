import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ people, setSortField, updateData }) => {
  const resetTable = () => {
    localStorage.clear()
    updateData(true)
  }
  return (
    !people.length ? (
      <p className="text-center font-weight-bold">Для создания таблицы, добавьте хотя бы одно поле</p>
    )
      : <div>
        <button type="button" className="btn btn-danger" onClick={resetTable}>Очистить таблицу</button>
        <table className="table table-bordered">

          <thead>
            <tr>
              <th scope="col" className="field-name">
                <button type="button" className="btn btn-outline-secondary"
                  onClick={() => setSortField('firstName')}>First name
                </button>
              </th>
              <th scope="col" className="field-name">
                <button type="button" className="btn btn-outline-secondary"
                  onClick={() => setSortField('secondName')}>Second name
                </button>
              </th>
              <th scope="col" className="field-name">
                <button type="button" className="btn btn-outline-secondary"
                  onClick={() => setSortField('phone')}>Phone
                </button>
              </th>
              <th scope="col" className="field-name">
                <button type="button" className="btn btn-outline-secondary"
                  onClick={() => setSortField('gender')}>Gender
                </button>
              </th>
              <th scope="col" className="field-name">
                <button type="button" className="btn btn-outline-secondary"
                  onClick={() => setSortField('age')}>Age
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {people.map(person => (
              <tr key={`${person.phone} ${person.firstName}`}>
                <th scope="row">{person.firstName}</th>
                <td>{person.secondName}</td>
                <td>+380 {person.phone}</td>
                <td>{person.gender}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  )
}

Table.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }
  )),
  setSortField: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
}

export default React.memo(Table)
