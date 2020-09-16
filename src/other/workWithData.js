import { inputValue } from './types'

function validate (name, value) {
  let reg = ''
  let phoneLength = 0

  switch (name) {
    case 'firstName':
    case 'secondName':
      reg = /[^A-Za-zа-яА-ЯіІїЇєЄ\s.-]+/g
      return !reg.test(value)
    case 'phone':
      reg = /[^0-9\s-]+/g
      phoneLength = value.replace(/\D/g, '').length
      return !reg.test(value) && phoneLength === 9
    case 'age':
      reg = /[^0-9]+/g
      return !reg.test(value) && +value < 120 && +value > 0
    case 'gender':
      return !!value
    default:
      return false
  }
}

export function hasSameType (person) {
  // ?
  for (const key in inputValue) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
      return false
    }
  }

  return true
}

export function getPeople () {
  const people = []
  for (const person of Object.keys(localStorage)) {
    const user = JSON.parse(localStorage.getItem(person))
    people.push(user)
  }
  return people
}

export function getCorrectPhone (phoneNumber) {
  const number = phoneNumber.match(/\d/g)
  return `${number[0] + number[1] + ' ' +
  number[2] + number[3] + number[4] + ' ' +
  number[5] + number[6] + ' ' +
  number[7] + number[8]}`
}

export function sortPeople (people, sortField, sortDirection) {
  if (!people.length) {
    return []
  }
  const sortedPeople = [...people]
  let sign = -1
  if (sortDirection) {
    sign = 1
  }
  switch (typeof sortedPeople[0][sortField]) {
    case 'number':
      sortedPeople.sort((a, b) => sign * (a[sortField] - b[sortField]))
      break
    default:
      sortedPeople.sort((a, b) => sign * a[sortField].localeCompare(b[sortField]))
      break
  }
  return sortedPeople
}

export default validate
