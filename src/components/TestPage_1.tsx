import * as React from 'react'
import { Paper,Box } from '@mui/material';


const TestPage_1 = () => {
    return(
        <Box
        sx={{
          display: 'flex',
          border: 0,
          flexWrap: 'wrap',
          borderRadius: 10,
          '&>:not(style)': {
            p: 4,
            width: 500,
            height: 300,
            zIndex: 10000,
          },
        }}
      >
        <Paper> Hello </Paper>
      </Box>

    );
};

export default TestPage_1;