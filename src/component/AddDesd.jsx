import React, { useState } from "react";
import productService from "../service/product.service";
const AddDesd=()=>
{
    const [dac, setDac] = useState({
        id: "",
        name: "",
        subject: "",
        CCEE: "",
        IA: "",
        lab: "",
        total: "",
        email: "",


      });
    
      const [msg, setMsg] = useState("");
    
      const handleChange = (e) => {
        const value = e.target.value;
        setDac({ ...dac, [e.target.name]: value });
      };
    
      const ProductRegsiter = (e) => {
        e.preventDefault();
    
        productService
          .saveStudentDesd(dac)
          .then((res) => {
            console.log("Product Added Sucessfully");
            setMsg("Product Added Sucessfully");
            setDac({
                id: "",
                name: "",
                subject: "",
                CCEE: "",
                IA: "",
                lab: "",
                total: "",
                email: "",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    

    return(
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Student</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>Enter Id</label>
                    <input
                      type="text"
                      name="id"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.id}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.subject}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter CCEE marks</label>
                    <input
                      type="text"
                      name="CCEE"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.CCEE}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter IA marks</label>
                    <input
                      type="text"
                      name="IA"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.IA}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Lab marks</label>
                    <input
                      type="text"
                      name="lab"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.lab}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Total marks</label>
                    <input
                      type="text"
                      name="total"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.total}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={dac.email}
                    />
                  </div>

                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddDesd