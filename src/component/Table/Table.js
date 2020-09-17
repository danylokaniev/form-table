import React from 'react'
import PropTypes from 'prop-types'
import TableHead from './TableHead'
import TableBody from './TableBody'

const Table = ({ people, setSortField, updateData, setShowDeleteModal }) => {
  return (!people.length
    ? (
      <p className="text-center font-weight-bold">To create a table, add at least one form.</p>
    )
    : <div>
      <table className="table">
        <TableHead setSortField={setSortField} setShowDeleteModal={setShowDeleteModal}/>
        <TableBody updateData={updateData} people={people}/>
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
  })),
  setSortField: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  setShowDeleteModal: PropTypes.func.isRequired
}

export default React.memo(Table)
