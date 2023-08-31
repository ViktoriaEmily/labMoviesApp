//import React, { useContext  } from "react";
import React, { useContext  } from "react";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { ShowsContext } from "../../contexts/showsContext";



export default function TvCard({ show, action }) {
  const { favouritesTV} = useContext(ShowsContext);
 
   if (favouritesTV.find((id) => id === show.id)) {
     show.favourite = true;
   } else {
     show.favourite = false
   }
 
  //  const handleAddToFavourite = (e) => {
  //    e.preventDefault();
  //    addToFavourites(movie);
  //  };
   
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          show.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {show.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }

        
      />


      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
    {action(show)}
    <Link to={`/pages/showDetails/${show.id}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  
   
  </CardActions>
    </Card>
  );
}