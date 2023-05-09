import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    id: 0,
    //employeeName: '',
    //occupation: '',
    imageName: '',
    imagesrc: defaultImageSrc,
    imageFile: null
}

export default function Images(props) {

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
                    imagesrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imagesrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        //temp.employeeName = values.employeeName == "" ? false : true;
        temp.imagesrc = values.imagesrc == defaultImageSrc ? false : true;
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
            formData.append('id', values.id)
            //formData.append('employeeName', values.employeeName)
            //formData.append('occupation', values.occupation)
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
                    <img src={values.imagesrc} className="card-img-top" />
                    <div className="card-body">
                        <div className="form-group">
                            <input type="file" accept="image/*" className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                       {/* <div className="form-group">
                            <input className={"form-control" + applyErrorClass('employeeName')} placeholder="Employee Name" name="employeeName"
                                value={values.employeeName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Occupation" name="occupation"
                                value={values.occupation}
                                onChange={handleInputChange} />
                        </div> */}
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

























{/* import axios from 'axios';
import React, { useState } from 'react'

export default function Employee(props) {


const [formData, setFormData] = useState({
    EmployeeName: '',
    Phone: '',
    Mail: '',
    Photo: null
  });
 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formDataObj = new FormData();
    formDataObj.append('EmployeeName', formData.EmployeeName);
    formDataObj.append('Phone', formData.Phone);
    formDataObj.append('Mail', formData.Mail);
    formDataObj.append('photo', formData.Photo);
  
    axios.post('https://localhost:7017/api/Images', formDataObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;
  
    setFormData({ ...formData, [name]: value });
  };

  return(
    <form onSubmit={handleSubmit}>
  <label>
    Employee Name:
    <input type="text" name="EmployeeName" value={formData.EmployeeName} onChange={handleInputChange} />
  </label>
  <br />
  <label>
    Phone:
    <input type="text" name="Phone" value={formData.Phone} onChange={handleInputChange} />
  </label>
  <br />
  <label>
    Email:
    <input type="email" name="Mail" value={formData.Mail} onChange={handleInputChange} />
  </label>
  <br />
  <label>
    Photo:
    <input type="file" name="Photo" onChange={handleInputChange} />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>

  );
} */}