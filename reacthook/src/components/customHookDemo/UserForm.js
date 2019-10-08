import React, {useRef, useEffect} from 'react'
import useInput from './hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const firstNameInput = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hi ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    useEffect(() => {
        firstNameInput.current.focus()
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Firstname</label>
                <input type='text'
                    ref={firstNameInput}
                    {...bindFirstName} />
            </div>
            <div>
                <label>Lastname</label>
                <input type='text'
                    {...bindLastName} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default UserForm
