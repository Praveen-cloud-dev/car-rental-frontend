
import React, { useState } from "react";
import toast from "react-hot-toast";
import { updateUser } from "../Services/userApi";

const EditModal = ({ setEditModel, user, refreshProfile }) => {

  const [uname, setUname] = useState(user.uname);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = async () => {
    try {
      const updatedData = { uname, phone, email };

      const res = await updateUser(user._id, updatedData);

      if (res.data.success) {
        toast.success("Profile updated successfully");

        // update localStorage
        const updatedUser = { ...user, ...updatedData };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // update profile UI
        refreshProfile(updatedUser);

        setEditModel(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while updating profile");
    }
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">Manage Profile</h5>
            <button
              type="button"
              className="btn-close bg-light"
              onClick={() => setEditModel(false)}
            ></button>
          </div>


          <div className="modal-body">

            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setEditModel(false)}>
              Close
            </button>

            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditModal;
