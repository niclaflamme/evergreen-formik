import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Switch } from 'evergreen-ui'


const propTypes = {
  field: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
  }).isRequired,
}

const defaultProps = {
  height: 24,
}


const Toggle = ({ field, form, ...props }) => {
  const [,, helpers] = useField(field.name)

  const toggleValue = () => {
    helpers.setValue(!field.value)
  }

  return (
    <Switch
      checked={field.value}
      onChange={toggleValue}
      { ...props }
    />
  )
}


Toggle.propTypes = propTypes
Toggle.defaultProps = defaultProps


export default Toggle
