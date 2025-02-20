import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from "@mui/material"
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { format } from 'date-fns'
import { HeroProps } from './hero.props';
import { calculateEstimatedTimeToRead } from '@/helpers/time.format';
import { useRouter } from 'next/router';

function Hero({blogs}: HeroProps) {

  const router = useRouter()
  const handleDate = (date: Date): Date => {
    return new Date(date)
  }

  return (
    <Box width={'100%'} height={'70vh'}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
          }
        }} 
      >
        {blogs.map(item => (
          <Box key={item.id}>
            <Box sx={{ position: 'relative', width: '100%', height: '70vh' }} onClick={() => router.push(`/blog/${item.slug}`)}>
              <Image src={item.image.url} alt={item.title} fill style={{ objectFit: 'cover' }}/>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}
              />
              <Box
                width={{xs: '100%', md: '70%'}}
                position={'relative'}
                color={'white'}
                zIndex={999}
                sx={{ top: '50%', transform: 'translateY(-50%)', paddingLeft: {xs: '10px', md: '50px'} }}
              >
                <Typography sx={{fontSize: {xs: '30px', md: '50px'}}}>{  item.title}</Typography>
                <Typography color={'gray'} sx={{fontSize: {xs: '20px', md: '25px'}}}>{item.exerpt}</Typography>
                <Box sx={{display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center'}}>
                  <Avatar alt={item.author.name} src={item.author.avatar.url} />
                  <Box>
                    <Typography>{item.author.name}</Typography>
                    <Box>{ format(handleDate(item.createdAt), 'dd MMM, yyyy') } &#x2022; {calculateEstimatedTimeToRead(item.description.text)}min read</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Hero