import React from 'react'
import PropTypes from 'prop-types'

const DeleteModal = ({ showDeleteModal, setShowDeleteModal, updateData }) => {
  const modal = showDeleteModal ? 'custom-modal-active' : 'custom-modal-none'
  const resetTable = () => {
    localStorage.clear()
    updateData(true)
    setShowDeleteModal(false)
  }
  return (
    <div className={`modal ${modal}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dropping the entire table</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
              onClick={() => setShowDeleteModal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h2 className="modal-text">Are you sure you want to delete the entire table?</h2>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={() => resetTable()}>Delete</button>
          </div>

        </div>
      </div>
    </div>
  )
}

DeleteModal.propTypes = {
  showDeleteModal: PropTypes.bool,
  setShowDeleteModal: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired
}

export default DeleteModal
