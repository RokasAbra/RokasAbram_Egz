import { useState, useEffect } from 'react';
import axios from 'axios';
import FrontContext from './FrontContext';
// import CreateIdea from './ideas/Create';
// import ListIdeas from './ideas/List';
import Nav from './Nav';
import { authConfig } from '../../Functions/auth';
import Create from './masters/Create';
import List from './masters/List';
import SortFilter from './SortFilter';

function Front({show}) {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [masters, setMasters] = useState(null);
    // const [donations, setDonations] = useState(null);
    const [createMaster, setCreateMaster] = useState(null);
    // const [createDonation, setCreateDonation] = useState(null);

    

  
    const [filter, setFilter] = useState(0);

    const [search, setSearch] = useState('');
    const doFilter = cid => {
        setMasters(cid);
        setFilter(parseInt(cid));
    }
    // useEffect(() => {
    //     let query;
    //     if (filter === 0 && !search) {
    //         query = '';
    //     } else if (filter) {
    //         query = '?cat-id=' + filter
    //     } else if (search) {
    //         query = '?s=' + search
    //     }


    // READ IDEAS
    useEffect(() => {
        axios
        .get("http://localhost:3003/masters", authConfig())
        .then((res) => setMasters(res.data));
    }, [lastUpdate]);

    // READ DONATORS
    // useEffect(() => {
    //     axios
    //     .get("http://localhost:3003/donators", authConfig())
    //     .then((res) => setDonations(res.data));
    // }, [lastUpdate]);

    // CREATE IDEAS
    useEffect(() => {
        if (null === createMaster) return;
        axios
          .post("http://localhost:3003/masters", createMaster, authConfig())
          .then((res) => {
            // showMessage(res.data.msg);
            setLastUpdate(Date.now()); // irasymas, update;
          })
          .catch((error) => {
            // showMessage({ text: error.message, type: "success" });
          });
      }, [createMaster]);

    // CREATE DONATION
    // useEffect(() => {
    //     if (null === createDonation) return;
    //     axios
    //       .post("http://localhost:3003/donators", createDonation, authConfig())
    //       .then((res) => {
    //         // showMessage(res.data.msg);
    //         setLastUpdate(Date.now()); // irasymas, update;
    //       })
    //       .catch((error) => {
    //         // showMessage({ text: error.message, type: "success" });
    //       });
    //   }, [createDonation]);


    return (
        <FrontContext.Provider value={{
            setCreateMaster,
            masters,
            setMasters,
            doFilter
        }}>
            
                        <Nav />
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <Create />
                                </div>
                            </div>
                        </div> */}

                        <div className="container">
                            <div className="row">
                            <div className="col-12">
                        <SortFilter />
                    </div>
                                <div className="col-12">
                                    <List />
                                </div>
                            </div>
                        </div>
                   
            
        </FrontContext.Provider>
    )
}

export default Front;