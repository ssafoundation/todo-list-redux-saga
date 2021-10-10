import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/app.action";

const Todoitem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h3>{todo.name}</h3> */}

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td className="col-4">#{Math.trunc(todo.id * 10)}</td>
            {/* <td className="col-4">{todo.name}</td> */}
            <td className="col-4">
              {edit ? (
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  value={name}
                />
              ) : (
                <span>{todo.name}</span>
              )}
            </td>
            <td className="col-1">
              <Button
                onClick={() => {
                  if (edit) {
                    setName(todo.name);
                    dispatch(
                      updateTodo({
                        ...todo,
                        name: name,
                      })
                    );
                  }
                  setEdit(!edit);
                }}
                className="btn btn-primary "
              >
                {edit ? "Update" : "Edit"}
              </Button>
            </td>
            <td className="col-1">
              <Button
                onClick={() => dispatch(deleteTodo({ id: todo.id }))}
                className="btn btn-primary"
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Todoitem;
