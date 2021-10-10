import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/app.action";
const Todoinput = () => {
  const [name, setName] = useState("");
  let dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      addTodos({
        id: Math.random(),
        name: name,
      })
    );
    setName("");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6">
            <div>
              <div className="mb-3" controlId="formBasicEmail">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                />
              </div>
              <button
                className="btn btn-danger"
                variant="primary"
                type="submit"
                onClick={handleAddTodo}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todoinput;
