import React from 'react';
import { Link } from 'react-router-dom';
const ListItem = () =>  {
    return (
        <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action"> Home  </Link>
            <Link to="/contact" className="list-group-item list-group-item-action">Contact</Link>
            <Link to="/listdata" className="list-group-item list-group-item-action">List Data</Link>                
        </div>
    );
}
export default ListItem;