import { useEffect, useState, useContext } from "react";
import BackContext from "./BackContext";

function Edit() {
  const { modalMaster, setModalMaster, setEditMaster } =
    useContext(BackContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [spec, setSpec] = useState(null);

  const [serviceName, setServiceName] = useState(null);
  const [city, setCity] = useState(null);
  useEffect(() => {
    if (null === modalMaster) {
      return;
    }
    setName(modalMaster.name);
    setSurname(modalMaster.surname);
    setCity(modalMaster.city);
    setSpec(modalMaster.spec);
    setServiceName(modalMaster.serviceName);
  }, [modalMaster]);

  const handleEdit = () => {
    const data = { name, id: modalMaster.id, surname, spec, serviceName, city };
    setEditMaster(data);
    setSurname('')
    setSpec('');
    setServiceName('');
    setCity("");
    setModalMaster(null);
  };

  if (null === modalMaster) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Redaguoti informacija</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalMaster(null)}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Vardas</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <label>Pavarde</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
              />
            </div>
            <div className="form-group">
              <label>Specialybe</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSpec(e.target.value)}
                value={spec}
              />
            </div>
            <div className="form-group">
              <label>Autoservisas</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setServiceName(e.target.value)}
                value={serviceName}
              />
            </div>
            <div className="form-group">
              <label>Miestas</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setModalMaster(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
