import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/img/images(1).png'

const initialFieldValues = {
    docID: 0,
    docName: '',
    docSrc: defaultImageSrc,
    docFile: null
}

export default function Documents(props) {

    const { addOrEdit, recordForEdit } = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})


    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let docFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    docFile,
                    docSrc: x.target.result
                })
            }
            reader.readAsDataURL(docFile)
        }
        else {
            setValues({
                ...values,
                docFile: null,
                docSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        //temp.employeeName = values.employeeName == "" ? false : true;
        temp.docSrc = values.docSrc == defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }

    const resetForm = () => {
        setValues(initialFieldValues)
        document.getElementById('image-uploader').value = null;
        setErrors({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData()
            formData.append('docID', values.docID)
            /*formData.append('employeeName', values.employeeName)
            formData.append('occupation', values.occupation)*/
            formData.append('docName', values.docName)
            formData.append('docFile', values.docFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        <>
            <div className="container text-center">
                <p className="lead">Documents </p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file"  className={"form-control-file" + applyErrorClass('docSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                      {/*  <img src={values.docSrc} className="card-img-top" />
                      
                      <div className="form-group">
                            <input className={"form-control" + applyErrorClass('employeeName')} placeholder="Employee Name" name="employeeName"
                                value={values.employeeName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Occupation" name="occupation"
                                value={values.occupation}
                                onChange={handleInputChange} />
                        </div>*/}
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
