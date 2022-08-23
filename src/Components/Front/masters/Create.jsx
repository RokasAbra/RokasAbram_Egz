import { useContext, useState, useRef } from "react";
import getBase64 from '../../../Functions/getBase64.js';
import FrontContext from "../FrontContext";

function Create() {
  const { setCreateMaster } = useContext(FrontContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [surname, setSurname] = useState(null);
  const [spec, setSpec] = useState(null);
  
  const [serviceName, setServiceName] = useState("");
  const [city, setCity] = useState("");
  const fileInput = useRef();

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
    .then(photo => setPhoto(photo))
    .catch(_ => {
      // tylim
    });
  }

  const handleCreate = () => {
    const data = { name, photo, surname, spec, serviceName, city};
    setCreateMaster(data);
    setName('');
    setSurname('');
    setSpec('');
    setPhoto(null);
    setServiceName('');
    setCity('');
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Prideti Meistra</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>Meistro Vardas</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {/* <small className="form-text text-muted">Vardas</small> */}
        </div>
        <div className="form-group">
          <label>Pavarde</label>
          <input
            type="text"
            className="form-control"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></input>
          {/* <small className="form-text text-muted">Pavarde</small> */}
        </div>
        <div className="form-group">
          <label>Nuotrauka</label>
          <input ref={fileInput} type="file" className="form-control" onChange={doPhoto}/>
          <small className="form-text text-muted">Įkelti nuotrauką</small>
        </div>
          {
            photo ? <div className="photo-bin"><img src={photo} alt='nice'/></div> : null
          }
            <div className="form-group">
          <label>Specialybe</label>
          <input
            type="text"
            className="form-control"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          ></input>
          {/* <small className="form-text text-muted">Specialybe</small> */}
        </div>
        <div className="form-group">
          <label>Servisas</label>
          <input
            type="text"
            className="form-control"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          ></input>
          <small className="form-text text-muted">Serviso pavadinimas</small>
        </div>
        <div className="form-group">
          <label>Miestas</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <small className="form-text text-muted">Serviso lokacija</small>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary with-loader"
          onClick={handleCreate}>Pridėti</button>
      </div>
    </div>
  );
}

export default Create;