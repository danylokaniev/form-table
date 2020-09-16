import React from 'react';
import PropTypes from 'prop-types';


const Modal = ({showModal, setShowModal}) => {
  const modal = showModal ? 'custom-modal-active' : 'custom-modal-none';
  return (
    <div className={`modal ${modal}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Корректно заполните все поля</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                    onClick={() => setShowModal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-text">Эта форма создана для добавление данных в таблицу. Чтобы добавить новое поле,
              необходимо корректно
              заполнить ВСЕ поля. А именно:
            </p>

            <ul>

              <li>First Name: разрешены все буквенные символы, пробел, точка, тире.<br/>
                (регулярное выражение -/[^A-Za-zа-яА-Я\s.-]+/g)
              </li>

              <li>Second Name: разрешены все буквенные символы, пробел, " . ", "-".<br/>
                (регулярное выражение -/[^A-Za-z\s.-]+/g)
              </li>

              <li>Phone: разрешены только цифры, пробел, и "-". Количество цифр - 9.<br/>
                (регулярное выражение - /[^0-9\s-]+/g)
              </li>

              <li>Age: разрешены только цифры. Максимальный возраст - 120.<br/>
                (регулярное выражение - /[^0-9]+/g)
              </li>

              <li>Gender: Нужно выбрать один из предложенных вариантов.<br/></li>
            </ul>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Понятно</button>
          </div>

        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.bool,
  setShowModal: PropTypes.func.isRequired,
}

export default Modal;
