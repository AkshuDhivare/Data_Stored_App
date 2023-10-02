import React from "react";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function DataField({
  name,
  email,
  index,
  setData,
  data,
  setShowDeleteSuccessAlert,
}) {
  const deleteData = (index) => {
    const newData = data.filter((_, idx) => idx !== index);
    setData(newData);
    setShowDeleteSuccessAlert(true);
    setTimeout(() => setShowDeleteSuccessAlert(false), 1200);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="row text-center my-3">
          <div className="col-lg-3">
            <h5>{index + 1}</h5>
          </div>
          <div className="col-lg-3">
            <h5>{name}</h5>
          </div>
          <div className="col-lg-3">
            <h5>{email}</h5>
          </div>

          <div className="col-lg-3">
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteData(index)}
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataField;
