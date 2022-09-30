import * as React from "react";
import { Box, Tabs, Tab, Popover } from '@mui/material/';
import HeaderTabs from './HeaderTabs';

import TestPage_1 from  '../TestPage_1';


const HeaderBar = () => {
  // const [value, setValue] = React.useState('zero');
  // const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  // const handlePopoverOpen = (value:string, event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);

  // };

  // const handlePopoverClose = (event: React.MouseEvent<HTMLElement>, value:string='zero') => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);

  return (
    <Box sx={{ width: '100%'}}>
      <HeaderTabs/>
    </Box>
  );
};

export default HeaderBar;
