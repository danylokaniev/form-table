import React from 'react'
import { inputValue, spanText } from '../../other/types'
import PropTypes from 'prop-types'

const TableHead = ({ setSortField, setShowDeleteModal }) => {
  console.log(Object.keys(inputValue))
  return (
    <thead>
      <tr>
        {
          Object.keys(inputValue).map(header => (
            <th
              scope="col"
              className="field-name"
              key={header}>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setSortField(header)}>
                {header === 'phone' ? 'Phone' : spanText[header]}
              </button>
            </th>
          ))
        }
        <th>
          <button type="button" className="btn btn-danger" onClick={() => setShowDeleteModal(true)}>Clean
          </button>
        </th>
      </tr>
    </thead>
  )
}

TableHead.propTypes = {
  setSortField: PropTypes.func.isRequired,
  setShowDeleteModal: PropTypes.func.isRequired
}

export default TableHead
