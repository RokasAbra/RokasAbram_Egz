import { useState, useEffect } from 'react';
import axios from 'axios';
import FrontContext from './FrontContext';
// import CreateIdea from './ideas/Create';
// import ListIdeas from './ideas/List';
import Nav from './Nav';
import { authConfig } from '../../Functions/auth';

import List from './masters/List';
import SortFilter from './SortFilter';

function Front({show}) {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [masters, setMasters] = useState(null);
    // const [donations, setDonations] = useState(null);
    const [createMaster, setCreateMaster] = useState(null);
    // const [createDonation, setCreateDonation] = useState(null);

    const [users, setUsers] = useState(null);

  
    const [filter, setFilter] = useState(0);

    const [search, setSearch] = useState('');

    const doFilter = cid => {
        setMasters(cid);
        setFilter(parseInt(cid));
    }
  
    useEffect(() => {
        let query;
        if (filter === 0 && !search) {
            query = '';
        } else if (filter) {
            query = '?meistrai-id=' + filter
        } else if (search) {
            query = '?s=' + search
        } 
        axios.get('http://localhost:3003/meistrai' + query, authConfig())
        .then(res => {
            const masters = new Map();
            res.data.forEach(p => {
                let comment;
                if (null === p.com) {
                    comment = null;
                } else {
                    comment = {id: p.id, com: p.name};
                }
                if (masters.has(p.id)) {
                    const pr = masters.get(p.id);
                    if (comment) {
                        pr.com.push(comment);
                    }
                } else {
                    masters.set(p.id, {...p});
                    const pr = masters.get(p.id);
                    pr.com = [];
                    delete pr.com_id;
                    if (comment) {
                        pr.com.push(comment);
                    }
                }
            });
            console.log([...masters].map(e => e[1]));
            setMasters([...masters].map(e => e[1]).map((p, i) => ({ ...p, row: i })));
        })

}, [filter, search, lastUpdate]);
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

    useEffect(() => {
        axios.get('http://localhost:3003/users', authConfig()).then((res) => {
          setUsers(res.data);
        });
      }, [lastUpdate]);
    
      function getUser() {
        return localStorage.getItem('username');
      }
    
      function userid() {
        const userId = users && users.filter((user) => user.name === getUser())[0].id;
        return userId;
      }

    return (
        <FrontContext.Provider value={{
            userid,
            getUser,
            setCreateMaster,
            masters,
            setMasters,
            doFilter,
            setSearch
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