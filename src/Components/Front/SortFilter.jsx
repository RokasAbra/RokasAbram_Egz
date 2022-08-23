import { useContext, useState } from 'react';
import FrontContext from './FrontContext';

function SortFilter() {

    const [sortBy, setSortBy] = useState('default');
    const { setMasters,  doFilter, master, setSearch, masters } = useContext(FrontContext);

    const [s, setS] = useState('');

    const [currency, setCurrency] = useState('USD');

    
    const doSearch = e => {
        setS(e.target.value);
        setSearch(e.target.value);
    }

   






    const doSort = e => {
        setSortBy(e.target.value);
        const p = [...masters]
        switch (e.target.value) {
            case 'ascName':
                p.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
                break;
            case 'descName':
                p.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                });
                break;
            default:
                p.sort((a, b) => a.row - b.row);
        }
        setMasters(p);
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>Sort and Filter</h2>
            </div>
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label>Sort By</label>
                                <select className="form-control" value={sortBy} onChange={doSort}>
                                    <option value="default">Default Sort</option>
                                    <option value="ascName">A-Z</option>
                                    <option value="descName">Z-A</option>   
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label>Filtruoti pagal specialybe</label>
                                <select className="form-control" onChange={e =>doFilter(e.target.value)} value={master}>
                                    <option value="0">Specialybes</option>
                                    {
                                        masters ? masters.map(c => <option key={c.id} value={c.id}>{c.spec}</option>) : null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group">
                                <label>Search</label>
                                <input className="form-control" type="text" value={s} onChange={doSearch} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SortFilter;



