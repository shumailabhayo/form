import { TextField, Button, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Initialize validation errors
    const validationErrors = {};

    if (!name) validationErrors.name = 'Name is required';
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!age) {
      validationErrors.age = 'Age is required';
    } else if (isNaN(age)) {
      validationErrors.age = 'Age must be a number';
    }

    setErrors(validationErrors);

    // Check if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      // Log name, email, and age to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Age:', age);

      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Form submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      });

      // Reset the form fields after submission
      setName('');
      setEmail('');
      setAge('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
        backgroundColor: '#f4f6f9', // Light background color
      }}
    >
      <Box
        sx={{
          backgroundColor: '#ffffff', // White background for the form
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
          padding: 4,
          borderRadius: 2,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          User Form
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />

          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            error={!!errors.age}
            helperText={errors.age}
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
