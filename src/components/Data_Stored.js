import React, { useState } from "react";
import "./Data_Stored.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Alert from "@mui/material/Alert";
import Header from "./Header";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DataField from "./DataField";

function Data_Stored() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);
  const [showAddSuccessAlert, setShowAddSuccessAlert] = useState(false);
  const [showDeleteSuccessAlert, setShowDeleteSuccessAlert] = useState(false);

  const handleNameChange = (event) => {
    setForm({ ...form, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setForm({ ...form, email: event.target.value });
  };

  const handleAddData = () => {
    if (form.name && form.email) {
      setData((oldData) => [
        ...oldData,
        { name: form.name, email: form.email },
      ]);
      setForm({ name: "", email: "" });
      setShowAddSuccessAlert(true);
      setTimeout(() => setShowAddSuccessAlert(false), 1200);
    } else {
      alert("Name and email fields must not be empty.");
    }
  };

  const deleteData = (index) => {
    const newData = data.filter((_, idx) => idx !== index);
    setData(newData);
    setShowDeleteSuccessAlert(true);
    setTimeout(() => setShowDeleteSuccessAlert(false), 1200);
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center pt-5">
            <div className="text-center">
              <Stack
                spacing={2}
                direction="row"
                className="justify-content-center"
              >
                <TextField
                  onCopy={() => alert("Dont copy")}
                  id="outlined-basic"
                  label="enter name"
                  variant="outlined"
                  onChange={handleNameChange}
                  value={form.name}
                />
                <TextField
                  onCopy={() => alert("Dont copy")}
                  type="email"
                  id="outlined-basic"
                  label="enter email"
                  variant="outlined"
                  onChange={handleEmailChange}
                  value={form.email}
                />
                <Button variant="contained" onClick={handleAddData}>
                  <ControlPointIcon />
                </Button>
              </Stack>
              {/* <hr /> */}
            </div>
          </div>
          <div className="overflow-auto">
            <div className="col-12 pt-4">
              <div className="row text-center my-3">
                <div className="col-3">
                  <h5>index</h5>
                </div>
                <div className="col-3">
                  <h5>Name</h5>
                </div>
                <div className="col-3">
                  <h5>Email</h5>
                </div>
                <div className="col-3">
                  <h5>Remove Data</h5>
                </div>
              </div>
              <hr />
            </div>
            {showAddSuccessAlert && (
              <Alert
                severity="success"
                onClose={() => setShowAddSuccessAlert(false)}
              >
                Data added successfully!
              </Alert>
            )}
            {showDeleteSuccessAlert && (
              <Alert
                severity="success"
                onClose={() => setShowDeleteSuccessAlert(false)}
              >
                Data deleted successfully!
              </Alert>
            )}
            {data.map((element, index) => (
              <DataField
                key={index}
                name={element.name}
                email={element.email}
                index={index}
                setData={setData}
                data={data}
                setShowDeleteSuccessAlert={setShowDeleteSuccessAlert}
                setShowAddSuccessAlert={setShowAddSuccessAlert}
              />
              // <div className='col-12' key={index}>
              //   <div className='row text-center my-3'>
              //     <div className='col-3'>
              //       <h5>{index + 1}</h5>
              //     </div>
              //     <div className='col-3'>
              //       <h5>{element.name}</h5>
              //     </div>
              //     <div className='col-3'>
              //       <h5>{element.email}</h5>
              //     </div>
              //     <div className='col-3'>
              //       <Button variant='contained' color="error" onClick={() => deleteData(index)}>
              //         <DeleteForeverIcon />
              //       </Button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Data_Stored;
