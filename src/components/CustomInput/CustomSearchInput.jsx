import React from "react";
// nodejs library to set properties for components
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon18 from "components/Icons/SearchIcon18";
import TextField from '@material-ui/core/TextField';

const styles = {
  iconRoot: {
    marginTop: '6px'
  },
  inputSearch: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#25345C',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#25345C',
      opacity: 1
    },
  },
};
const useStyles = makeStyles(styles);

export default function CustomSearchInput(props) {
  const { placeholder } = props
  const classes = useStyles();
  return (
    <div style={{ marginTop: '18px' }}>
        <TextField
          id="input-extrabar-search"
          placeholder="Find what you need..."
          InputProps={{
            classes: {input: classes.inputSearch},
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon18 classes={{ root: classes.iconRoot }} />
              </InputAdornment>
            ),
            disableUnderline: true
          }}
        />
    </div>
  );
}
