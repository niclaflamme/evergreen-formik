import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form as FormikForm } from 'formik'


const propTypes = {
  initialValues: PropTypes.shape({}).isRequired,
}

const defaultProps = {
}


const Form = ({ children, ...props }) => {
  return (
    <Formik {...props}>
      <FormikForm>
        { children }
      </FormikForm>
    </Formik>
  )
}


Form.propTypes = propTypes
Form.defaultProps = defaultProps


export default Form
