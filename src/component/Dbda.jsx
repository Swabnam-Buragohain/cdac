import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Dbda = () => {
  const [studentList, setStudentList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllDbdaStudent()
      .then((res) => {
        setStudentList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProductDbda(id)
      .then((res) => {
        // setMsg("Deleted Sucessfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                DBDA Student List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Id</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Subject</th>
                      <th scope="col">CCEE</th>
                      <th scope="col">IA</th>
                      <th scope="col">Lab</th>
                      <th scope="col">Total</th>
                      <th scope="col">Email</th>
                      <th scope="col">Action</th>


                    </tr>
                  </thead>
                  <tbody>
                    {studentList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.subject}</td>
                        <td>{p.ccee}</td>
                        <td>{p.ia}</td>
                        <td>{p.lab}</td>
                        <td>{p.total}</td>
                        <td>{p.email}</td>

                        <td>
                        <Link to={'add'} className="btn btn-sm btn-primary ms-1">
                            Add
                          </Link>
                          <Link to={'edit'} className="btn btn-sm btn-primary ms-1">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dbda;