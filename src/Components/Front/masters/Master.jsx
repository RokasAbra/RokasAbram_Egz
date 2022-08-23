import { useState } from "react";


function Master({master}) {

    

 
    // const [donation, setDonation] = useState('0');

//     const handleDonate = () => {
//         const data = { name, donation, idea_id: idea.id };
//         setCreateDonation(data);
//         setName('');
//         setDonation('0');
//   };

  
    return (
        <li className="list-group-item">
            <div className="item-front">
            <div className="content">
                    <h4><b>{master.master}</b></h4>
                    {
                        master.photo ? <div className="photo-bin"><img src={master.photo} alt='nice'/></div> : null
                    }
                    <div>  
                        <b>{master.name} {master.surname}. </b>
                        {/* <span> {master.photo}</span> */}
                        <p> {master.spec}</p>
                        <p>Autoservisas: {master.serviceName}</p>
                        <p>{master.city}</p>
                    </div>
                    
                    {/* <p style={idea.sum <= surinktaSuma ? {display: 'none'} : {display: 'block'}}>Likusi iki tikslo suma: <b>{donations && ideas ? (idea.sum - surinktaSuma) : null} EUR</b></p>
                    <div style={idea.sum <= surinktaSuma ? {display: 'none'} : {display: 'block'}}>
                        <label>Aukotojo vardas</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <label>Aukojama suma</label>
                        <input type="number" className="form-control" value={donation} onChange={(e) => setDonation(e.target.value)}></input>
                    </div>
                </div>
                <div style={idea.sum <= surinktaSuma ? {display: 'none'} : {display: 'block'}} className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleDonate}>Paaukoti</button>
                </div>
                <div className="form-group">
                    <h5>Lėšų surinkimo istorija: </h5>
                    {
                        donations && ideas ? donations.map(d => (d.idea_id === idea.id) ? <div key={d.id}>
                            Aukotojas: <b>{d.name}</b>; Aukojama suma: <b>{d.donation.toFixed(2)} EUR</b>
                            </div> : null) : null
                    } */}
                </div>
                <button type="button" class="btn btn-outline-primary rating">Patinka</button>
                

            </div>
        </li>
    );
}

export default Master;
