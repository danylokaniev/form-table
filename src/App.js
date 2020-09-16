import React, { useEffect, useState } from 'react'
import { getPeople, sortPeople } from './other/workWithData'
import Modal from './component/Modal'
import Form from './component/Form'
import Table from './component/Table'
import './styles/main.css'

function App () {
  const [showModal, setShowModal] = useState(true)
  const [shouldUpdate, updateData] = useState(false)
  const [sortField, setSortField] = useState('firstName')
  const [sortDirection, setSortDirection] = useState(true)

  const people = sortPeople(getPeople(), sortField, sortDirection)

  const sort = (newSortField) => {
    if (newSortField !== sortField) {
      setSortField(newSortField)
    } else {
      setSortDirection(!sortDirection)
    }
  }

  useEffect(function () {
    updateData(false)
  }, [shouldUpdate])

  return (
    <>
      <p className="lead text-center">
        Created by -{' '}
        <a href="https://www.linkedin.com/in/danylo-kanievskyi/" className="badge badge-primary">
          Danylo Kanievskyi
        </a>
      </p>
      <Form setShowModal={setShowModal} updateData={updateData}/>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Table people={people} setSortField={sort} updateData={updateData}/>
    </>
  )
}

export default App
