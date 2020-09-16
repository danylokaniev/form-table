import React, { useEffect, useState } from 'react'
import { getPeople, sortPeople } from './other/workWithData'
import Modal from './component/Modal'
import Form from './component/Form'
import Table from './component/Table'
import './styles/main.css'
import DeleteModal from './component/DeleteModal'

function App () {
  const [showModal, setShowModal] = useState(true)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

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
      <Table people={people} setSortField={sort} updateData={updateData} setShowDeleteModal={setShowDeleteModal}/>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} updateData={updateData}/>
    </>
  )
}

export default App
