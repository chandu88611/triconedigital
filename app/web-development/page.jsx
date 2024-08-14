import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Paper elevation={3} style={{ padding: '40px', marginBottom: '40px', background: '#1e3a8a', color: 'white' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              India's leading website design and development company.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Ascent is the one-stop solution provider for website and business needs for your business. We are trusted by over 1500+ clients.
            </Typography>
            <Typography variant="h6" gutterBottom>
              1500+ Satisfied Clients
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', background: 'white', color: 'black' }}>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <TextField label="Your Name" variant="outlined" margin="normal" fullWidth />
              <TextField label="Your Email" variant="outlined" margin="normal" fullWidth />
              <TextField label="Your Phone" variant="outlined" margin="normal" fullWidth />
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Clients Section */}
      <Typography variant="h4" gutterBottom align="center">
        Our Clients
      </Typography>
      <Grid container spacing={3} justifyContent="center" style={{ marginBottom: '40px' }}>
        {['Client1', 'Client2', 'Client3', 'Client4', 'Client5'].map((client, index) => (
          <Grid item key={index}>
            <Avatar alt={client} src={`/path/to/${client.toLowerCase()}.png`} style={{ width: 60, height: 60 }} />
          </Grid>
        ))}
      </Grid>

      {/* Services Section */}
      <Typography variant="h4" gutterBottom align="center">
        Website design and development services
      </Typography>
      <Grid container spacing={3}>
        {['Web Development', 'Digital Marketing', 'Software Development'].map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardHeader title={service} />
              <CardMedia
                component="img"
                height="140"
                image={`/path/to/service${index + 1}.jpg`}
                alt={service}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`${service} service description goes here.`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Comparison Table Section */}
      <Typography variant="h4" gutterBottom align="center" style={{ marginTop: '40px' }}>
        Compare Our Plans
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '40px' }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <List>
              {['Feature1', 'Feature2', 'Feature3', 'Feature4', 'Feature5'].map((feature, index) => (
                <ListItem key={index}>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>
          {['Basic', 'Standard', 'Premium'].map((plan, index) => (
            <Grid item xs={4} key={index}>
              <Typography variant="h6" gutterBottom>
                {plan}
              </Typography>
              <List>
                {['Yes', 'Yes', 'No', 'Yes', 'No'].map((status, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={status} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Testimonials Section */}
      <Typography variant="h4" gutterBottom align="center">
        Clients love us
      </Typography>
      <Grid container spacing={3}>
        {['John Doe', 'Jane Smith', 'Robert Brown'].map((client, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {client}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`"${client} testimonial goes here."`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom align="center" style={{ marginTop: '40px' }}>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={3}>
        {[
          'What is included in the Ascent subscription plan?',
          'What are the benefits of the Ascent plan?',
          'How much does the Ascent plan cost?',
          'Can I get a custom plan tailored to my needs?'
        ].map((question, index) => (
          <Grid item xs={12} key={index}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {`${question} answer goes here.`}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
