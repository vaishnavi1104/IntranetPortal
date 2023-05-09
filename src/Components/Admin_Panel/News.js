import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    newsId: 0,
    newsTitale: '',
    content: '',
    imageName: '',
    imageUrl: defaultImageSrc,
    imageFile: null
}

export default function News(props) {

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
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageUrl: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageUrl: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.newsTitale = values.newsTitale == "" ? false : true;
        temp.imageUrl = values.imageUrl == defaultImageSrc ? false : true;
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
            formData.append('newsId', values.newsId)
            formData.append('newsTitale', values.newsTitale)
            formData.append('content', values.content)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')

    return (
        <>
            <div className="container text-center">
                <p className="lead">An Employee</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageUrl} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageUrl')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className="form-group">
                            <input className={"form-control" + applyErrorClass('newsTitale')} placeholder="News Title" name="newsTitale"
                                value={values.newsTitale}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="News Content" name="content"
                                value={values.content}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
