import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;
const borderWidth = 2;
const width = pxToRem(40);
const height = pxToRem(22);
const size = pxToRem(16);
const gap = (22 - 16) / 2;

const styles = (theme) => ({
  root: {
    width,
    height,
    padding: 0,
    margin: theme.spacing(1),
    overflow: 'unset',
  },
  switchBase: {
    padding: pxToRem(gap),
    '&$checked': {
      color: '#fff',
      transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
      '& + $track': {
        backgroundColor: "#33C27D",
        opacity: 1,
        border: 'none',
      },
      '& $thumb': {
        backgroundColor: '#fff',
      },
    },
  },
  track: {
    borderRadius: 40,
    border: `solid ${theme.palette.grey[400]}`,
    borderWidth,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
    boxSizing: 'border-box',
  },
  thumb: {
    boxShadow: 'none',
    backgroundColor: theme.palette.grey[400],
    width: size,
    height: size,
  },
  checked: {},
})

const useStyles = makeStyles(styles);

const CustomSwitch = (props) => {
  const { checked, onChange, name } = props
  const classes = useStyles();

  return (
    <div>
      <Switch
        checked={checked}
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomSwitch;