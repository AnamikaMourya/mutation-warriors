import { Tab } from "@mui/material";
import * as React from "react";

interface TabProp {
    id: string;
  value: number;
  label: string;
  href?: string;
}


const clickTab = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
};

const LinkTab = (props: TabProp) => {
  return <Tab component="a" onClick={clickTab} {...props} />;
};

export default LinkTab;
