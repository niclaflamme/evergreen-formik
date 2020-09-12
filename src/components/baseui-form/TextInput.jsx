import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

const propTypes = {
  displayErrorOnBlur: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  positive: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'text', 'password', 'tel']),
  validationMessage: PropTypes.string,
  caption: PropTypes.string
}

const defaultProps = {
  caption: '',
  disabled: false,
  displayErrorOnBlur: false,
  id: null,
  positive: false,
  required: false,
  type: 'text',
}


const TextInput = ({
  displayErrorOnBlur,
  field,
  form,
  id,
  label,
  disabled,
  positive,
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
    <FormControl
      label={() => label}
      disabled={disabled}
      positive={positive}
      caption={() => "caption"}
      error={() => maybeProps.validationMessage}
    >
      <Input
        error={maybeProps.isInvalid}
        { ...field }
      />
    </FormControl>
  );
}


TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps


export default TextInput
