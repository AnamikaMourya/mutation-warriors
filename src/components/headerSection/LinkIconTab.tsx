import * as React from "react";
import { Tab } from "@mui/material";

interface TabProp {
  value: number;
  icon: any;
  label: string;
  href: string;
  id: string;
}

const clickTab = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
};

const LinkIconTab = (props: TabProp) => {
  return (
    <Tab
      id={props.id}
      label={props.label}
      component="a"
      href={props.href}
      icon={props.icon}
      onClick={clickTab}
      sx={{color: 'error.main', position: 'left'}}
    />
  );
};

export default LinkIconTab;
