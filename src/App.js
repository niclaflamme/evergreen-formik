import React from 'react';
import { Field } from 'formik'
import {
  Button,
  Card,
  Heading,
  Pane,
  Paragraph,
  Label,
  ThemeProvider,
} from 'evergreen-ui'
import * as yup from 'yup'

import TextInput from 'components/form/TextInput'
import Select from 'components/form/Select'
import Toggle from 'components/form/Toggle'
import Form from 'components/form/Form'
import themeOverride from 'themeOverride'


const App = () => {
  const initialValues = {
    fullName: '',
    password: '',
    gender: '',
    isHappy: false,
  }

  const validationSchema = yup.object().shape({
    fullName: yup.string()
      .required('This field is required'),
    password: yup.string()
      .required('This field is required'),
    gender: yup.string()
      .required('This field is required')
  })

  const genderOptions = [
    { label: '', value: null },
    { label: 'Male', value: 'MALE' },
    { label: 'Female', value: 'FEMALE' },
  ]


  const handleSubmit = formValues => {
    console.log(formValues)
  }


  return (
    <ThemeProvider value={themeOverride}>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width="100vw"
        background="#f2fbff"
      >
        <Card
          background="white"
          minWidth={360}
          padding={40}
          elevation={2}
        >
          <Form
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Pane
              marginBottom={20}
            >
              <Heading
                size={600}
              >
                This form is awesome
              </Heading>
              <Paragraph>
                Even the subtitle is awesome
              </Paragraph>
            </Pane>
            <Pane
              marginBottom={60}
            >
              <Field
                name="fullName"
                label="First name"
                component={TextInput}
                displayErrorOnBlur
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={TextInput}
                displayErrorOnBlur
              />
              <Pane marginBottom={24}>
                <Pane marginBottom={4}>
                  <Label>
                    Are you happy?
                  </Label>
                </Pane>
                <Pane>
                  <Field
                    name="isHappy"
                    component={Toggle}
                  />
                </Pane>
              </Pane>
              <Field
                name="gender"
                label="Gender"
                component={Select}
                options={genderOptions}
                displayErrorOnBlur
              />
            </Pane>
            <Pane>
              <Button
                type="submit"
                appearance="primary"
              >
                Submit
              </Button>
            </Pane>
          </Form>
        </Card>
      </Pane>
    </ThemeProvider>
  );
}

export default App;
