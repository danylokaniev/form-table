import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ showModal, setShowModal }) => {
  const modal = showModal ? 'custom-modal-active' : 'custom-modal-none'
  return (
    <div className={`modal ${modal}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Fill in all fields correctly</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
              onClick={() => setShowModal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-text">This form is designed to add data to a table. To add a new field,
              must be correct
              filled in ALL fields. Namely:
            </p>

            <ul>

              <li>First Name: all alphabetic characters are allowed, space, period, dash.<br/>
              </li>

              <li>Second Name: all alphabetic characters are allowed, space, period, dash.<br/>
              </li>

              <li>Phone: numbers, spaces, and dashes are allowed. The number of digits is 9.<br/>
              </li>

              <li>Age: only numbers are allowed. The maximum age is 120.<br/>
              </li>

              <li>Gender: You need to choose one of the proposed options.<br/></li>
            </ul>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Clear</button>
          </div>

        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func.isRequired
}

export default Modal
