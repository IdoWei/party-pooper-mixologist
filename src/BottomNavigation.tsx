import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { BiDrink } from 'react-icons/bi';
import { GiDrinkMe } from 'react-icons/gi';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 0,
  },
  buttonRoot: {
      maxWidth: 'none'
  }
});

type AppBottomNavigationProps = {
    onTabChanged: (value: any) => void;
}

export default function AppBottomNavigation({onTabChanged}: AppBottomNavigationProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        onTabChanged(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction data-testid="mixer-tab" className={classes.buttonRoot} label="Mixer" icon={<GiDrinkMe />} />
      <BottomNavigationAction data-testid="drinks-tab" className={classes.buttonRoot} label="Drinks" icon={<BiDrink />} />
    </BottomNavigation>
  );
}