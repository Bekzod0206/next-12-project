import { Avatar, Box, Divider, Typography } from "@mui/material"
import Image from "next/image"
import { format } from 'date-fns'

function Content() {
  return (
    <Box width={{xs: '100%', md: '70%'}}>
      {data.map(item => (
        <Box
          key={item.image}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, .5)',
            padding: '20px',
            marginTop: '20px',
            borderRadius: '8px',
            boxShadow: '0 8px 16px rgba(255, 255, 255, .1)'
          }}
        >
          <Box position={'relative'} width={'100%'} height={{xs: '30vh', md: '50vh'}}>
            <Image src={item.image} alt={item.title} fill style={{objectFit: 'cover', borderRadius: '10px'}} />
          </Box>
          <Typography variant="h4" marginTop={'30px'}>{item.title}</Typography>
          <Typography variant="body1" color={'gray'}>{item.exert}</Typography>
          
          <Divider sx={{marginTop: '30px'}} />
          
          <Box sx={{display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center'}}>
            <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box>{ format(new Date(), 'dd MMM, yyyy') } &#x2022; 10min read</Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content

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