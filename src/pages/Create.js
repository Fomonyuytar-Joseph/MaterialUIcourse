import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Container } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
export default function Create() {
  const classes = useStyles();
  const history = useHistory()
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

   fetch('http://localhost:8000/notes',{
    method:'POST',
    headers:{"Content-type": "application/json"},
    body: JSON.stringify({title ,details, category})
   }).then (()=> history.push('/'))
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Label"
          variant="outlined"
          color="secondary"
          className={classes.field}
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          className={classes.field}
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />}label="Reminders"/>
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          // startIcon={<SendIcon/>}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      {/* icons */}
      {/* <br/>
      <AcUnitOutlinedIcon/>
      <AcUnitOutlinedIcon color="secondary"/>
      <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
      <AcUnitOutlinedIcon color="action" fontSize="small"/>
      <AcUnitOutlinedIcon color="error"/> */}

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
