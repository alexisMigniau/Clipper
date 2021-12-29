import Head from 'next/head';
import { Box, Container, Grid, Autocomplete, TextField, Typography } from '@mui/material';
import { Layout } from '../components/layout';
import { useState } from 'react';
import { searchChannels } from '../services/api'

const Streamer = () => {
  const [streamers, setStreamers] = useState([])
  const [timer, setTimer] = useState(null)

  const handleChangeInput = async (e) => {
    if(e.length > 2)
    {
      clearTimeout(timer)
      const newTimer = setTimeout(async () => {
        console.log(await searchChannels(e))
      }, 1000)
      setTimer(newTimer)
    }
  }

  return (
  <>
    <Head>
      <title>
      Clipper | Streamer
      </title>
    </Head>
    <Box
    component="main"
    >
      <Container maxWidth={false}>
        <Typography variant="h2">Gestion des streamers</Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Autocomplete
              id="streamer-name"
              options={streamers}
              onInputChange={e => handleChangeInput(e.target.value)}
              renderInput={(params) => <TextField {...params} label="Ajouter un nouveau streamer à la liste" />}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  )
}

Streamer.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Streamer;