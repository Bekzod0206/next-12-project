import { navItems } from "@/config/constants"
import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { format } from 'date-fns'

function Sidebar() {
  const [currDate, setCurrDate] = useState<Date | null>(null);
  useEffect(() => {
    setCurrDate(new Date());
  }, []);
  
  return (
      <Box width={{xs: '100%', md: '30%'}}>
        <Box position={'sticky'} top={'100px'} sx={{transition: 'all .3s ease'}}>

          <Box
            padding={'20px'}
            border={'1px solid gray'}
            borderRadius={'8px'}
          >
            <Typography variant="h5">Latest blog</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
              {data.map(item => (
                <Box key={item.title} marginTop={'20px'}>
                  <Box sx={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      style={{objectFit: 'cover', borderRadius: '8px'}}
                    />
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                      <Typography variant="body1">{item.title}</Typography>
                      <Box sx={{display: 'flex', gap: '15px'}}>
                        <Avatar alt={item.author.name} src={item.author.image} />
                        <Box>
                          <Typography variant="body2">{item.author.name}</Typography>
                          <Box sx={{opacity: '.6'}}>{ currDate && format(currDate, 'dd MMM, yyyy') }</Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{marginTop: '20px'}} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            padding={'20px'}
            border={'1px solid gray'}
            borderRadius={'8px'}
            marginTop={'20px'}
          >
            <Typography variant="h5">Category</Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
              {navItems.map(item => (
                <Fragment key={item.route}>
                  <Button fullWidth sx={{justifyContent: 'flex-start', height: '50px'}}>
                    {item.label}
                  </Button>
                  <Divider />
                </Fragment>
              ))}
            </Box>
          </Box>

        </Box>
      </Box>
  )
}

export default Sidebar

const data = [
  {
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Tehnical SEO with Hyghraph',
    exert: 'Get started with your SEO implementation when usin a Headless CMS',
    author: {
      name: 'Bekzod Davronov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx'
    },
  },
  {
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Tehnical SEO with Hyghraph',
    exert: 'Get started with your SEO implementation when usin a Headless CMS',
    author: {
      name: 'Bekzod Davronov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx'
    },
  }
]