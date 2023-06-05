import React from 'react';
import './style.css';
function TableData () {    
    return (            
            <div className="container">                   
                {/* table Heading*/}                    
                <div className='table-heading p-2'>
                    <h3 className='table-catagory float-left'>Task Manager</h3>
                    <div className="btn-group float-right" role="group">
                        <button type="button" className="btn btn-secondary">All</button>
                        <button type="button" className="btn btn-success">Success</button>
                        <button type="button" className="btn btn-warning">Pending</button>
                        <button type="button" className="btn btn-info">In-progress</button>
                    </div>
                </div>                                
                {/* Table*/}                    
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>Owner</th>
                            <th>Create On</th>
                            <th>Priority</th>
                            <th>Status</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Client Meeting</td>
                            <td>Lucas</td>
                            <td>05/05/2021</td>
                            <td><span className='bg-danger text-white py-1 px-2 rounded'>Hight</span></td>
                            <td><span className='bg-success text-white py-1 px-2 rounded'>Success</span></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mock up Design</td>
                            <td>Robert</td>
                            <td>10/05/2021</td>
                            <td><span className='bg-warning text-white py-1 px-2 rounded'>Medium</span></td>
                            <td><span className='bg-info text-white py-1 px-2 rounded'>In-progress</span></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Database Design</td>
                            <td>Eric</td>
                            <td>15/05/2021</td>
                            <td><span className='bg-danger text-white py-1 px-2 rounded'>Hight</span></td>
                            <td><span className='bg-info text-white py-1 px-2 rounded'>In-progress</span></td>
                        </tr>
                    </tbody>
                </table>               
            </div>                 
    );    
}
export default TableData;
