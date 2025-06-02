import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

export default function AnotherSection() {
  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {[1, 2, 3].map((project) => (
          <Grid item xs={12} sm={4} key={project}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Project {project}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brief description of project {project}. This could include technologies used or a summary.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
