import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { BiDrink } from "react-icons/bi";
import { GiDrinkMe } from "react-icons/gi";

const useStyles = makeStyles({
  root: {
    width: "100%",
    flexBasis: "auto",
    flexGrow: 0,
    flexShrink: 0,
  },
  buttonRoot: {
    maxWidth: "none",
  },
});

type AppBottomNavigationProps = {
  onTabChanged: (value: any) => void;
};

type BottomNavigationTab = {
  label: string;
  testId: string;
  icon: ReactElement;
};

export const BottomNavigationTabs: Record<string, BottomNavigationTab> = {
  MIXER_TAB: {
    label: "Mixer",
    testId: "mixer-tab",
    icon: <GiDrinkMe />,
  },
  DRINKS_TAB: {
    label: "Drinks",
    testId: "drinks-tab",
    icon: <BiDrink />,
  },
};

export default function AppBottomNavigation({
  onTabChanged,
}: AppBottomNavigationProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(
    BottomNavigationTabs.MIXER_TAB.label
  );

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        onTabChanged(newValue);
      }}
      showLabels
      className={classes.root}
      data-testid="bottom-navigation-root"
    >
      {Object.values(BottomNavigationTabs).map((tab: BottomNavigationTab) => (
        <BottomNavigationAction
          data-testid={tab.testId}
          className={classes.buttonRoot}
          label={tab.label}
          icon={tab.icon}
          value={tab.label}
          key={tab.label}
        />
      ))}
    </BottomNavigation>
  );
}
