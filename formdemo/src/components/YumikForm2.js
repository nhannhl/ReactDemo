import React, { useState } from 'react'
import { withStyles, Button, TextField } from '@material-ui/core';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const styles = {}

const validation = Yup.object().shape({
    username: Yup.string().required('UserName required').min(4,'4 ky tu'),
    password: Yup.string().required('UserName required').min(6,'6 ky tu')
})

const YumikForm2 = (props) => {
    const { classes } = props;
    const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

    return (
        <React.Fragment>
            <Formik 
                initialValues={{username:'', password:''}} 
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    // actions.resetForm()
                    actions.setStatus({error: `Error from api ${values.username}`})
                    // actions.setFieldError('username', 'error msg from api');
                    actions.setErrors({
                        username: 'error msg from api',
                        password: 'password error api'
                    })
                }}
                validationSchema={validation}
            >
                {(props) => {
                    const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, status} = props;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <TextField 
                                    error={errors.username && touched.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    helperText={(errors.username && touched.username) && errors.username}
                                    id="username" name="username" label="Username" placeholder="Your username" className={classes.textField} margin="normal" />
                            </div>
                            <div>
                            <TextField
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password && touched.password}
                                helperText={(errors.password && touched.password) && errors.password}
                                value={values.password}
                                id="password"
                                name="password"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="Your password"
                                margin="normal"
                            />
                            </div>
                            <Button type="button" onClick={handleReset} disabled={!dirty || isSubmitting} >Reset</Button>
                            <Button type="submit" disabled={isSubmitting}>Submit</Button>
                            {!!status && <p>{status.error}</p>}
                        </Form>
                    )
                }}
            </Formik>
        </React.Fragment>
    )
}


export default withStyles(styles)(YumikForm2)
