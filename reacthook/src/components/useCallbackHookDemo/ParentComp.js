import React, {useState, useCallback} from 'react'
import Title from './Title'
import ButtonComp from './ButtonComp'
import CountComp from './CountComp'

function ParentComp() {
    const [age, setAge] = useState(29)
    const [salary, setSalary] = useState(500)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 100)
    }, [salary])

    return (
        <div>
            <Title />
            <CountComp valueNumber={age} text={'Age'} />
            <ButtonComp handleSalary={incrementAge}>Incement Age</ButtonComp>
            <CountComp valueNumber={salary} text={'Salary'} />
            <ButtonComp handleSalary={incrementSalary}>Incement Salary</ButtonComp>
        </div>
    )
}

export default ParentComp
