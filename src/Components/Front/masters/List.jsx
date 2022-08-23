import { useContext } from "react";
import FrontContext from "../FrontContext";
import Master from "./Master";


function List() {

    const {masters} = useContext(FrontContext);

    // function order(a, b) {
    //     return a < b ? -1 : (a > b ? 1 : 0);
    // }

    return (
        <div className="card mt-4">
            <div className="card-header">
              <h2>Meistru sarasas</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        masters ? masters.map(master =>  <Master key={master.id} master={master}></Master> ) : null
                    }
                </ul>
            </div>
          </div>
    )
}

export default List;




// {
//     ideas ? ideas.map((idea => (idea.verify === 1) ? (<Idea key={idea.id} idea={idea}></Idea>) : null).sort((a, b) => b.sum - a.sum)) : null
//     }