import React, {useState} from 'react'


const FormValidation = () => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        website: ''
    })

    const [isError, setError] = useState(true)

    const handleChange = (event) => {
        event.preventDefault()
        setInfo({...info, [event.target.name]: event.target.value})
        
    }


    const handleSubmit = (event) => {
        
        event.preventDefault()
        console.log('submit')

        if(info.name.match(/^[a-zA-Z]+$/) && info.name.length > 5) setError(false)
        if(info.email.includes('@') && info.email.length > 5) setError(false)
        if(info.phoneNumber.match(/^[0-9]+$/) && info.phoneNumber.length === 10) setError(false)
        if(info.website.includes('.')) setError(false)
        else setError(true)
    }

    return (
        <form className='Form' onSubmit = {handleSubmit}>
            <input 
                name = 'name'
                placeholder = 'Name'
                value = {info.name}
                onChange = {handleChange}
            />
            <input 
                name = 'email'
                placeholder = 'Email'
                value = {info.email}
                onChange = {handleChange}

            />
            <input 
                name = 'phoneNumber'
                placeholder = 'Phone Number'
                value = {info.phoneNumber}
                onChange = {handleChange}

            />
            <input 
                name = 'website'
                placeholder = 'Website'
                value = {info.website}
                onChange = {handleChange}

            />

            <button type = 'submit' > Verify </button>
            <p> {isError ? 'Form is Incomplete': 'Form is Complete'} </p>
        </form>
    )
}


export default FormValidation