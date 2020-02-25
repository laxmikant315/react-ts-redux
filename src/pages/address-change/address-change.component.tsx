import React, { useEffect } from 'react';


import Button from '@material-ui/core/Button';

import { AddressChangeStyle } from './address-change.styles';
import { Grid, Card, TextField, CardContent } from '@material-ui/core';

import { Formik } from 'formik';

export const AddressChangePage = (props: any) => {


  const { collections, fetchCollectionsStart, routes } = props;

  useEffect(() => {
    fetchCollectionsStart();

  }, [fetchCollectionsStart]);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    alert('submitted')
  }
  return (
    <AddressChangeStyle>
      <Grid className="grid">
        <Card variant="outlined">
          <CardContent>

            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors: { email?: string, password?: string } = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password) {
                  errors.password = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid
                      style={{ height: 200 }}
                      container direction="column"
                      justify="space-around"
                      alignItems="center" >
                      <TextField
                        type="email"
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />

                      <TextField

                        type="password"
                        name="password"
                        label="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                      />



                      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                        Submit
               </Button>
                    </Grid>

                  </form>
                )}
            </Formik>

          </CardContent>
        </Card>
      </Grid >
    </AddressChangeStyle>
  );
};

export default AddressChangePage;
