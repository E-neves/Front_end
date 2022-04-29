import React from 'react' ;
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home(){
    return (
        <>
       <Grid container direction="row" justifyContent="center"  alignItems="center" style={{backgroundColor: "#6B8E23"}}>
           <Grid alignItems="center"  item xs={6}>
               <Box paddingX={20} >
<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "white" , fontWeight: "Bold "}}>Seja bem vindo(a)!</Typography>
<Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color: "white" , fontWeight: "Bold "}}>Ao Mercado da Sustentabilidade</Typography>
       </Box>
       <Box display="flex" justifyContent="center">
           <Box marginRight={1} >
               </Box>
               <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#6B8E23", color: "white"}}>Ver Postagens</Button>
       </Box>
           </Grid>
           <Grid item xs={6} >
               <img src="https://i.imgur.com/j2DFr51.jpg" alt="" width="700px" height="500px" />
           </Grid>
           <Grid xs={12}  style={{ backgroundColor: "OliveDrab" }} >

           </Grid>
       </Grid>
        </>
    );
}

export default Home;