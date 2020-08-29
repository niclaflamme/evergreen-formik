import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { TextInputField as EvergreenTextInputField } from 'evergreen-ui'


const propTypes = {
  displayErrorOnBlur: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'text', 'password', 'tel']),
  validationMessage: PropTypes.string,
}

const defaultProps = {
  id: null,
  required: false,
  type: 'text',
  displayErrorOnBlur: false,
}


const TextInput = ({
  displayErrorOnBlur,
  field,
  form,
  id,
  ...props
}) => {
  const [, meta] = useField(field.name);


  // Do no display errorMessage before user blurs field
  const errorMessage = meta.touched ? meta.error : ''

  // Do not display error until form is submitted, unless specified for field
  const shouldDisplayError = form.submitCount > 0 || displayErrorOnBlur


  const maybeProps = {}

  if (id) {
    maybeProps.htmlFor = id
  }

  if (shouldDisplayError && meta.touched) {
    maybeProps.validationMessage = errorMessage
    maybeProps.isInvalid = !!errorMessage
  }

  return (
    <EvergreenTextInputField
      { ...props }
      { ...field }
      { ...maybeProps }
    />
  )
}


TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps


export default TextInput
