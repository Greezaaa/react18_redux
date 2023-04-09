import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWorkers, removeWorker, addWorker } from "./reducer";
export function Worker() {
  const workers = useSelector(selectWorkers);
  const dispatch = useDispatch();
  const [newWorkerName, setNewWorkerName] = useState("");
  const [newWorkerAge, setNewWorkerAge] = useState("");
  const [newWorkerSalary, setNewWorkerSalary] = useState("");
  const [newWorkerAptitudes, setNewWorkerAptitudes] = useState("");

  const handleRemove = (name) => {
    dispatch(removeWorker(name));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newWorker = {
      name: newWorkerName,
      age: newWorkerAge,
      salary: newWorkerSalary,
      aptitudes: newWorkerAptitudes,
    };
    dispatch(addWorker(newWorker));
    setNewWorkerName("");
    setNewWorkerAge("");
    setNewWorkerSalary("");
    setNewWorkerAptitudes("");
  }
  return (
    <>

      <form onSubmit={handleAdd}>

        <input
          type="text"
          placeholder="Enter worker name"
          value={newWorkerName}
          onChange={(e) => setNewWorkerName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter worker age"
          value={newWorkerAge}
          onChange={(e) => setNewWorkerAge(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter worker salary"
          value={newWorkerSalary}
          onChange={(e) => setNewWorkerSalary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter worker aptitudes (comma-separated)"
          value={newWorkerAptitudes}
          onChange={(e) =>
            setNewWorkerAptitudes(e.target.value.split(","))
          }
        />
        <button type="submit">Add Worker</button>
      </form>
      {workers && workers.length > 0 ? (
        workers.map((worker, index) => (
          <div key={index}>
            <p>
              <strong>Name:</strong> {worker.name}
            </p>
            <p>
              <strong>Age:</strong> {worker.age}
            </p>
            <p>
              <strong>Salary:</strong> {worker.salary}
            </p>
            <p>
              <strong>Aptitudes:</strong> {worker.aptitudes.join(", ")}
            </p>
            <button onClick={() => handleRemove(worker.name)}>
              Remove Worker
            </button>
          </div>
        ))
      ) : (
        <p>No workers yet.</p>
      )}
    </>
  );
}

/*  */