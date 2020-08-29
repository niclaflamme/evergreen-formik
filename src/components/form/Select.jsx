import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { SelectField as EvergreenSelect } from 'evergreen-ui'


const propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
    })
  ).isRequired,
  required: PropTypes.bool,
}

const defaultProps = {
  required: false,
  height: 40,
}


const Select = ({
  displayErrorOnBlur,
  field,
  form,
  id,
  options,
  ...props
}) => {
  const [, meta] = useField(field.name)


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
    <EvergreenSelect
      { ...props }
      { ...field }
      { ...maybeProps }
    >
      {
        options.map((option, index) => {
          const { label } = option

          return (
            <option key={index}>
              { label }
            </option>
          )
        })
      }
    </EvergreenSelect>
  )
}


Select.propTypes = propTypes
Select.defaultProps = defaultProps

export default Select
