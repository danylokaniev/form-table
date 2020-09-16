import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ people }) => {
  return (
    !people.length ? (
        <p className="text-center font-weight-bold">Для создания таблицы, добавьте хотя бы одно поле</p>
      ) :
      <div>
        <table className="table table-bordered">

          <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Second name</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
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

  );
};

Table.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      secondName: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
    }
  ))
};

export default React.memo(Table);
