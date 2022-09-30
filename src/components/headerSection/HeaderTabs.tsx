import * as React from "react";
import { Tabs, Popover } from "@mui/material/";
import LinkTab from "./LinkTab";
import LinkIconTab from "./LinkIconTab";
import LinkPopoverTab from "./LinkPopoverTab";
import headerBarContent from "../../contents/header-bar-content";

const HeaderTabs = () => {
  const [tabValue, setTabValue] = React.useState("zero");

  const handleChange = ( event: React.SyntheticEvent, newValue: string ): void => {
    setTabValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log("**** mouseIN");
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    console.log("**** mouseOut");
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tabs value={tabValue} onChange={handleChange} aria-label="Menu Headers" centered>
        <LinkIconTab {...headerBarContent.name} />
        <LinkTab {...headerBarContent.blogs} />
        <LinkTab {...headerBarContent.educationalResources} />
        <LinkTab {...headerBarContent.getInvolved} />
        <LinkTab {...headerBarContent.aboutUs} />
        <LinkTab {...headerBarContent.contactUs} />
        {/* <LinkPopoverTab handleClick = {handleClick} {...headerBarContent.educationalResources}/> */}
      </Tabs>
      {/* <Popover
        id="menu-content"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handleClose}
        disableRestoreFocus
      >
        {"Hello Manish"}
      </Popover> */}
    </>
  );
};

export default HeaderTabs;
