import React, {useEffect,useState} from 'react';
import {getPeople} from "./other/getData";
import Modal from "./component/Modal";
import Form from "./component/Form";
import Table from "./component/Table";
import "./styles/main.css";


function App() {
  const [showModal, setShowModal] = useState(true);
  const [shouldUpdate, updateData] = useState(false);
  let people = getPeople();

  useEffect(function () {
    people = getPeople();
    updateData(false);
  }, [shouldUpdate]);


  return (
    <>
      <p className="lead text-center">
        Created by -{` `}
        <a href="https://www.linkedin.com/in/danylo-kanievskyi/" className="badge badge-primary">
          Danylo Kanievskyi
        </a>
      </p>
      <Form setShowModal={setShowModal} updateData={updateData}/>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Table people={people}/>
    </>
  );
}

export default App;
