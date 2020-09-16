import React from 'react';
import PropTypes from 'prop-types';
import InputField from "./InputField";
import validateInput from "../other/getData";
import {inputValue, wasChanged, hasError, spanText} from '../other/types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: {
        ...inputValue,
      },
      wasChanged: {
        ...wasChanged,
      },
      hasError: {
        ...hasError,
      },
      spanText: {
        ...spanText,
      }
    }
  }

  handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(state => ({
      inputValue: {
        ...state.inputValue,
        [name]: value,
      },
      wasChanged: {
        ...state.wasChanged,
        [name]: true,
      },
      hasError: {
        ...state.hasError,
        [name]: !validateInput(name, value),
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();


    if (Object.values(this.state.hasError).includes(true)) {
      this.props.setShowModal(true);
      return;
    }

    const firstName = this.state.inputValue.firstName;
    const secondName = this.state.inputValue.secondName;

    localStorage.setItem(`${firstName} ${secondName}`, JSON.stringify(this.state.inputValue));

    this.props.updateData(true);

    this.setState({
      inputValue: {
        ...inputValue,
      },
      wasChanged: {
        ...wasChanged,
      },
      hasError: {
        ...hasError,
      },
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off" className="form">

        {
          Object.keys(this.state.inputValue).map(key => (
            <InputField
              key={this.state.spanText[key]}
              name={key}
              handleInput={this.handleInput}
              spanText={this.state.spanText[key]}
              value={this.state.inputValue[key]}
              wasChanged={this.state.wasChanged[key]}
              hasError={this.state.hasError[key]}
            >
              {key === 'gender' && (
                <>
                  <option value="">Выберете пол ...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </>
              )}
            </InputField>
          ))
        }
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    );
  }
}


Form.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
}

export default Form;


