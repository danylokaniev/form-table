import {inputValue} from "./types";

function validate(name, value) {

  let reg = '';

  switch (name) {
    case 'firstName':
    case 'secondName':
      reg = /[^A-Za-zа-яА-Я\s.-]+/g;
      return !reg.test(value);
    case 'phone':
      reg = /[^0-9\s-]+/g;
      const phoneLength = value.replace(/\D/g, "").length;
      return !reg.test(value) && phoneLength === 9;
    case 'age':
      reg = /[^0-9]+/g;
      return !reg.test(value) && +value < 120 && +value > 0;
    case 'gender':
      return !!value;
    default:
      return false;
  }
}

export function hasSameType(person) {
  for (const key in inputValue) {
    if (!person.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export function getPeople() {
  const people = [];
  for (const person of Object.keys(localStorage)) {
    let user = JSON.parse(localStorage.getItem(person));
    if (hasSameType(user)) {
      people.push(user);
    }
  }
  return people;
}


export default validate;
