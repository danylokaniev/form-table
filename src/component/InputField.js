import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({name, handleInput, spanText, value, children, wasChanged, hasError}) => {
  let isValid = '';
  if (wasChanged && !hasError) {
    isValid = 'is-valid';
  } else if (wasChanged && hasError) {
    isValid = 'is-invalid';
  }

  return (
    <div className="input-group mb-3">

      <div className="input-group-prepend">
        <span className="input-group-text">{spanText}</span>
      </div>

      {children ? (
          <select
            className={`custom-select ${isValid}`}
            name={name}
            onChange={handleInput}
            value={value}
          >
            {children}
          </select>)
        : (
          <input
            type="text"
            className={`form-control ${isValid}`}
            name={name}
            onChange={handleInput}
            value={value || ''}
            placeholder={`Введите значение`}
          />
        )}
    </div>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleInput: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default React.memo(InputField);
