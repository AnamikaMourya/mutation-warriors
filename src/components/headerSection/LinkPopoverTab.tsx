import { PowerInputSharp } from "@mui/icons-material";
import { Tab, Popover } from "@mui/material";
import * as React from "react";

interface TabProp {
  id: string;
  value: number;
  label: string;
  // mouseIn?: (event: React.MouseEvent<HTMLElement>) => void;
  // mouseOut?: () => void;
  // open?: boolean;
  handleClick:(event: React.MouseEvent<HTMLElement>)=>void
}


// const clickTab = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//   event.preventDefault();
// };



const LinkPopoverTab = (props: TabProp) => {

  return <Tab component="a" onClick={props.handleClick} id = {props.id} label = {props.label} value= {props.value}/>;
};


export default LinkPopoverTab;
