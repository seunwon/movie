import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

function HoverRating() {

  const [value, setValue] = React.useState(1.5);

  let movieid=parseInt((window.location.href).toString().replace("http://localhost:3000/testing/",""))
  console.log(movieid)

  React.useEffect(() => {
    window.localStorage.setItem({movieid}, value)
  },[movieid])
  
  return (
    <Box>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}

export default HoverRating;


