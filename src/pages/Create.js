import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Container} from "@material-ui/core";
export default function Create() {
  return (
    <Container>
      <Typography variant="h6">Create a New Note</Typography>


<Button
onClick={()=> console.log("you clicked me")}
type="submit"
variant="contained"
color="secondary"


>
Submit
</Button>




{/* 
      <Button type="submit">submit</Button>
      <Button variant="outlined" type="submit" color="secondary">submit</Button>
   <ButtonGroup variant="contained" color="secondary">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three </Button>
   </ButtonGroup> */}

    </Container>
  );
}
