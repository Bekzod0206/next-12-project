import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { format } from 'date-fns'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useEffect, useState } from "react";

function Footer() {
  const [currDate, setCurrDate] = useState<Date | null>(null);
  useEffect(() => {
    setCurrDate(new Date());
  }, []);

  return (
    <Box
      padding={'20px'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141414',
        color: 'white'
      }}
      borderTop={'1px solid rgba(255, 255, 255, .5)'}
    >
      <Typography>
        © Beka, {currDate && format(currDate, 'yyyy')}. All rights reserved.
      </Typography>
      <Box sx={{display: 'flex', gap: '15px'}}>
        <TelegramIcon sx={{cursor: 'pointer'}} />
        <InstagramIcon sx={{cursor: 'pointer'}} />
        <YouTubeIcon sx={{cursor: 'pointer'}} />
      </Box>
    </Box>
  )
}

export default Footer