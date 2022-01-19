import Head from 'next/head';
import { Box, Container, Grid, Autocomplete, TextField, Typography } from '@mui/material';
import { Layout } from '../components/layout';
import { searchChannels } from '../services/api'
import { useState } from 'react';

const Streamer = () => {
  
  // Barre de recherche
  const [streamers, setStreamers] = useState([])
  const [timer, setTimer] = useState(null)
  const [isMore, setIsMore] = useState(false);

  const handleChangeInput = async (e) => {
    if(e.length > 2)
    {
      clearTimeout(timer)
      const newTimer = setTimeout(async () => {
        let response = await searchChannels(e)
        setIsMore(!Object.keys(response.pagination).length === 0)
        console.log(response.data)
        setStreamers(response.data)
      }, 500)
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
              size="small"
              onInputChange={(e,value, reason) => {
                if(reason === 'input')
                  handleChangeInput(value)
                else if(reason === 'reset')
                  setStreamers([])
              }}
              renderInput={(params) => <TextField {...params} variant="outlined" label="Ajouter un nouveau streamer à la liste"/>}
              getOptionLabel={option => option.display_name}
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