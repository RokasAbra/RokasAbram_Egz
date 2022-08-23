import { useContext, useState, useEffect } from "react";
import BackContext from "./BackContext";

function Idea({master}) {

    const { setDeleteMaster, setEditMaster,  } = useContext(BackContext);

    

    // useEffect(() => {
    //     if (null === acceptIdea) {
    //       return;
    //     }
    //     console.log(acceptIdea);
    //     setIdeaVerify(acceptIdea.verify);
    // }, [acceptIdea, ideaVerify]);

//     const handleAccept = () => {
//         setIdeaVerify(ideaVerify ? '1' : '0')
//         console.log(idea.verify)
//   };

//   const handleAccept = () => {
//     const data = {
//         id: idea.id,
//         verify: idea.verify === 0 ? 1 : 0
//   };
//   console.log(data);
//   setEditIdea(data);
//   setAcceptIdea(null);
// }

    const handleDelete = () => {
        setDeleteMaster(master);
        // console.log(idea)
  };

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
                        
                        <p> {master.spec}</p>
                        <p>Autoservisas: {master.serviceName}</p>
                        <p>{master.city}</p>
                    </div>
                 
              
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Ištrinti</button>
                </div>
            </div>
        </li>
    );
}

export default Idea;