import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './App.css';

function App() {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@pugsleyinvestigations.com';
  };

  return (
    <Box sx={{ color: '#fff' }}>
      <Box
        component="img"
        src="./placeholder.jpg"
        alt="Pugsley Investigations"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '90vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, height: '90vh' }} />
      <Box sx={{ padding: '2rem', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Pugsley Investigations
        </Typography>
        <Box sx={{ overflowY: 'scroll' }}>
          <Typography variant="h4" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Pugsley Investigations, Denver's premier private investigation firm, where we bring clarity to complex situations. With over 10 years of experience in the field, our team of licensed and skilled investigators is dedicated to delivering accurate, timely, and discreet services tailored to meet your unique needs.
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            At Pugsley Investigations, our mission is to provide our clients with reliable and confidential investigative services. We understand the sensitive nature of our work and are committed to maintaining the highest standards of integrity and professionalism in every case we undertake.
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" paragraph>
            We offer a comprehensive range of investigative services, including:
          </Typography>
          <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
            <li style={{ marginBottom: '0.5rem' }}>Background Checks: Uncover the truth about individuals or businesses with thorough background investigations.</li>
            <li style={{ marginBottom: '0.5rem' }}>Surveillance: Utilize state-of-the-art technology and techniques to monitor activities and gather evidence.</li>
            <li style={{ marginBottom: '0.5rem' }}>Missing Persons: Employ expert strategies to locate missing loved ones or debtors.</li>
            <li style={{ marginBottom: '0.5rem' }}>Infidelity Investigations: Provide clarity and evidence in matters of marital fidelity.</li>
            <li style={{ marginBottom: '0.5rem' }}>Fraud Investigations: Detect and prevent fraudulent activities to protect your interests.</li>
            <li style={{ marginBottom: '0.5rem' }}>Corporate Investigations: Safeguard your business with specialized services tailored to your corporate needs.</li>
          </ul>
          <Typography variant="h5" align="center" gutterBottom>
            Our Approach
          </Typography>
          <Typography variant="body1" paragraph>
            We believe in a client-centered approach, where understanding your concerns and objectives is our top priority. Our team takes the time to listen, assess, and develop a strategic plan to achieve the best possible outcomes for your case. We combine traditional investigative methods with cutting-edge technology to ensure that our findings are both comprehensive and reliable.
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
            <li style={{ marginBottom: '0.5rem' }}>Expertise: Our investigators bring years of experience and specialized training to every case.</li>
            <li style={{ marginBottom: '0.5rem' }}>Confidentiality: We maintain the utmost discretion and confidentiality in all our dealings.</li>
            <li style={{ marginBottom: '0.5rem' }}>Results-Driven: We are committed to delivering results that exceed your expectations.</li>
            <li style={{ marginBottom: '0.5rem' }}>Local Knowledge: With a deep understanding of Denver and its unique landscape, we are well-positioned to navigate the challenges of investigations in this region.</li>
          </ul>
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button variant="contained" onClick={handleContactClick}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
