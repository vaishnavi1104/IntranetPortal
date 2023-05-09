import React, { useState, useEffect } from 'react'
import Employee from './Employee'
import News from './News'
import axios from "axios";

export default function NewsList() {
    const [employeeList, setEmployeeList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshEmployeeList();
    }, [])

    const employeeAPI = (url = 'https://localhost:7274/api/News/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post("https://localhost:7274/api/News", newRecord),
            update: (id, updatedRecord) => axios.put(`https://localhost:7274/api/News/${id}`, updatedRecord),
            delete: id => axios.delete(`https://localhost:7274/api/News/${id}`)
        }
    }

    function refreshEmployeeList() {
        employeeAPI().fetchAll()
            .then(res => {
                setEmployeeList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('newsId') === "0")
            employeeAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshEmployeeList();
                })
                .catch(err => console.log(err))
        else
            employeeAPI().update(formData.get('newsId'), formData)
                .then(res => {
                    onSuccess();
                    refreshEmployeeList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            employeeAPI().delete(id)
                .then(res => refreshEmployeeList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" height='70%' width='40%' onClick={() => { showRecordDetails(data) }}>
            <img height='70%' width='40%' src={data.imageUrl} className="card-img-top rounded-squire " />
            <div className="card-body">
                <h5>{data.newsTitale}</h5>
                <span>{data.content}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.newsId))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">News ModelS</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <News
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(employeeList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(employeeList[3 * i])}</td>
                                    <td>{employeeList[3 * i + 1] ? imageCard(employeeList[3 * i + 1]) : null}</td>
                                    <td>{employeeList[3 * i + 2] ? imageCard(employeeList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
