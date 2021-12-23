import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  FormControl,
  FormLabel,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { authorization } from '../ultils';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ReactLink } from '../components';
import { gql, useMutation } from '@apollo/client';
import { signInQuery } from '../modules/auth';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { AuthorizationComponent } from '../components/Authorization';
const theme = createTheme();

const Login = (props: any) => {
  const [signUp, { data, loading, error }] = useMutation(signInQuery);
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.signIn) {
      navigate('/');
    }
  }, [data]);
  const formikForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      // Validate form field
      email: Yup.string()
        .required('Email is required')
        .email('Email must be a valid email'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be more than 6 charactors'),
    }),
    onSubmit: ({ email, password }) => {
      signUp({
        variables: {
          email,
          password,
        },
      });
    },
  });

  return (
    <AuthorizationComponent path='/login'>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>

            <FormControl
              margin='normal'
              component='fieldset'
              error={Boolean(error)}
              variant='standard'
            >
              <Grid container justifyContent='center'>
                <FormLabel component='legend'>
                  {error && error.message}
                </FormLabel>
              </Grid>
            </FormControl>

            <Box
              component='form'
              onSubmit={formikForm.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={formikForm.values.email}
                onChange={formikForm.handleChange}
                error={Boolean(formikForm.errors.email)}
                helperText={formikForm.errors.email}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={formikForm.values.password}
                onChange={formikForm.handleChange}
                error={Boolean(formikForm.errors.password)}
                helperText={formikForm.errors.password}
              />
              <LoadingButton
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                loading={loading}
              >
                Sign In
              </LoadingButton>
              <Grid container>
                <Grid item xs>
                  <ReactLink to='/forgot-password'>Forgot password?</ReactLink>
                </Grid>
                <Grid item>
                  <ReactLink to='haha'>
                    {"Don't have an account? Sign Up"}
                  </ReactLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </AuthorizationComponent>
  );
};

export default Login;
