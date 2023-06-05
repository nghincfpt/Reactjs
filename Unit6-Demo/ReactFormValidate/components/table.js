import React, { PureComponent, useState } from 'react'
import { data } from '../../../../tulamtodo/src/data';



export default function Table() {
    //  buộc lên for
    const updateFormInit = {
        id: "",
        name: "",
        age: "",
        address: "",
        phone: "",
    }

    const loadUpdateItemInfo = (item) => {
        // console.log("item", item);
        updateFormInit.id = item.id;
        updateFormInit.name = item.name;
        updateFormInit.age = item.age;
        updateFormInit.address = item.address;
        updateFormInit.phone = item.phone;
        setFormValues(item);
        // console.log("formValues", formValues);
    }

    const [formValues, setFormValues] = useState(updateFormInit)

    //update
    const [updatedate, setupdatedate] = useState("")
    //  ẩn hiện
    const [hide, sethide] = useState(true);

    const [datas, setdatas] = useState(data)

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [address, setaddress] = useState('')
    const [phone, setphone] = useState('')
    //
    const [errorname, setErrorname] = useState('')
    const [errorage, seterrorage] = useState('')
    const [erroraddress, seterroraddress] = useState('')
    const [errorphone, seterrorphone] = useState('')

    // xóa trong ô input để update
    const cancelupdate = () => {
        setupdatedate('');
    }
    // update buôc lên form
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues(
            { ...formValues, [name]: value }
        )
    }

    //update
    const updateuser = (e) => {
        e.preventDefault();
        console.log("formValues here", formValues);
        let newDatas = datas.map(item => {
            if (item.id === formValues.id) {
                item = formValues;
            }
            return item;
        })
        setdatas(newDatas);
        console.log("newDatas", newDatas);

    }

    // update thẳng lên form


    const handlADD = (e) => {
        e.preventDefault();
        let check = true;
        if (name.length === 0) {
            setErrorname('tên không được để trống ')
            check = false;

        } else if (!new RegExp('^[a-zA-Z ]+$').test(name)) {
            setErrorname('ten khong hop le')
            check = false;
        } else {
            setErrorname('')
        }

        console.log(age)
        if (age.length === 0) {
            seterrorage('age khong duoc de trong')
            check = false;

        } else if (!new RegExp('^[0-9]+$').test(age)) {
            seterrorage('Age khong duoc  nhap chu')
            check = false;
        } else {
            seterrorage('')
        }
        if (address.length === 0) {
            seterroraddress('address khong dc de trong ')
            check = false;
        } else if (!new RegExp('^[ a-zA-Z]+$').test(address)) {
            seterroraddress('không được nhập số ')
            check = false;
        } else {
            seterroraddress('')
        }

        if (phone.length === 0) {
            seterrorphone("không được để trống")
            check = false;
        } else if (!new RegExp('^[0-9]+$').test(phone)) {
            seterrorphone(' Phải nhập số ')
            check = false;
        } else {
            seterrorphone('')
        }


        if (check) {

            setdatas(prev => [...prev, { name, age, address, phone }])
            //set cac o input rong

            setname('')
            setage('')
            setaddress('')
            setphone('')
        }

    }

    //delete
    const deletetask = (id) => {
        let newtasks = datas.filter(task => task.id !== id)
        setdatas(newtasks);
    }

    return (
        <div className=''>
            <div className='d-flex'>
                <div className='col-7'>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Address</th>
                                <th scope="col">phone</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((item, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td> {item.name} </td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>(+84){item.phone}</td>
                                    <td>
                                        <i className="fa-regular fa-pen-to-square btn btn-outline-warning"
                                            onClick={() => loadUpdateItemInfo(item)}
                                            onDoubleClick={() => sethide(true)}
                                        >  edithuhu</i>
                                        <i className="fa-solid fa-trash-can btn btn-outline-danger" onClick={() => deletetask(item.id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className='btn btn-outline-success' onClick={() => sethide(false)}>Create</button>

                    </div>
                </div>

                {
                    hide ?
                        <div className='col-5'>
                            <div className=' mt-3'>

                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formValues.name}
                                                onChange={handleOnChange}
                                            // onBlur={e => chuye(e.target.value)}
                                            />
                                            <div style={{ color: 'red', textAlign: 'left' }}>{errorname}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Age</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="age"
                                                name="age"
                                                value={formValues.age}
                                                onChange={handleOnChange}
                                            />
                                            <div style={{ color: 'red', textAlign: 'left' }}>{errorage}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Address</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                value={formValues.address}
                                                onChange={handleOnChange}
                                            />
                                            <div style={{ color: "red" }}>{erroraddress}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Phone</label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={formValues.phone}
                                                onChange={handleOnChange}
                                            />
                                            <div style={{ color: "red" }}>{errorphone}</div>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn btn-outline-success' onClick={(e) => updateuser(e)}>Update</button>

                                </form>

                            </div>
                        </div>
                        :
                        <div className='col-5'>
                            <div className=' mt-3'>

                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputPassword"
                                                value={name}

                                                onChange={e => setname(e.target.value)}
                                            // onBlur={e => chuye(e.target.value)}
                                            />
                                            <div style={{ color: 'red', textAlign: 'left' }}>{errorname}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Age</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputPassword"
                                                value={age}
                                                onChange={e => setage(e.target.value)}
                                            />
                                            <div style={{ color: 'red', textAlign: 'left' }}>{errorage}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Address</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputPassword"
                                                value={address}
                                                onChange={e => setaddress(e.target.value)}
                                            />
                                            <div style={{ color: "red" }}>{erroraddress}</div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Phone</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" id="inputPassword"
                                                value={phone}
                                                onChange={e => setphone(e.target.value)}
                                            />
                                            <div style={{ color: "red" }}>{errorphone}</div>
                                        </div>
                                    </div>
                                    <button type='submit' className='btn btn-outline-success' onClick={(e) => handlADD(e)}>Cracte</button>

                                </form>

                            </div>
                        </div>
                }

            </div>
        </div >
    )
}



