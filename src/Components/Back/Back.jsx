import { useState, useEffect } from "react";
import axios from "axios";
import BackContext from "./BackContext";
import Nav from "./Nav";
import ListIdeas from "./List";
import { authConfig } from "../../Functions/auth";
import Create from "./Create";

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [masters, setMasters] = useState(null);
  // const [donations, setDonations] = useState(null);
  // const [acceptIdea, setAcceptIdea] = useState(null);
  const [deleteMaster, setDeleteMaster] = useState(null);
  const [createMaster, setCreateMaster] = useState(null);
  const [editMaster, setEditMaster] = useState(null);
  const [modalMaster, setModalMaster] = useState(null);
  // READ masters
  useEffect(() => {
    axios
      .get("http://localhost:3003/admin/master", authConfig())
      .then((res) => setMasters(res.data));
  }, [lastUpdate]);
  //Create
  useEffect(() => {
    if (null === createMaster) return;
    axios
      .post("http://localhost:3003/admin/master", createMaster, authConfig())
      .then((res) => {
        // showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        // showMessage({ text: error.message, type: "success" });
      });
  }, [createMaster]);

  // DELETE IDEA
  useEffect(() => {
    if (null === deleteMaster) return;
    axios
      .delete(
        "http://localhost:3003/admin/master/" + deleteMaster.id,
        authConfig()
      )
      .then((res) => {
        // showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        // showMessage({ text: error.message, type: "danger" });
      });
  }, [deleteMaster]);

  useEffect(() => {
    if (null === editMaster) return;
    axios
      .put(
        "http://localhost:3005/admin/master" + editMaster.id,
        editMaster,
        authConfig()
      )
      .then((res) => {
        setLastUpdate(Date.now());
      })
      .catch((error) => {});
  }, [editMaster]);

  return (
    <BackContext.Provider
      value={{
        setCreateMaster,
        masters,
        setDeleteMaster,
        setEditMaster,
        setModalMaster,
        modalMaster,
      }}
    >
      {show === "admin" ? (
        <>
          <Nav />
          <div className="container">
            <div className="row">
              <div className="col-8">
                <ListIdeas />
              </div>
              <div className="col-4">
                <Create />
              </div>

              <div className="row"></div>
            </div>
          </div>
        </>
      ) : null}
    </BackContext.Provider>
  );
}

export default Back;
