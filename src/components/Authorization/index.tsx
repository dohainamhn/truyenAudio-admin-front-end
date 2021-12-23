import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router';
import { getMeQuery } from '../../modules/auth';
import { Box, CircularProgress } from '@mui/material';

export const AuthorizationComponent = ({ children, path }: any) => {
  const { loading, error, data } = useQuery(getMeQuery);
  const navigate = useNavigate();
  useEffect(() => {
    if (path === '/login') {
      if (!error && !loading) {
        navigate('/');
      }
    } else {
      if (error && !loading) {
        navigate('/login');
      }
    }
  }, [error]);
  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </div>
  );
};
