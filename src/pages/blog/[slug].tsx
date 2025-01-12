import { Sidebar } from "@/components"
import { BlogsType } from "@/interfaces/blogs.interface"
import { CategoryType } from "@/interfaces/categories.interface"
import Layout from "@/layout/layout"
import { BlogService } from "@/services/blog.service"
import { Avatar, Box, Divider, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import Image from "next/image"
import { format } from 'date-fns'
import { calculateEstimatedTimeToRead } from "@/helpers/time.format"
import SEO from "@/layout/seo/seo"

function DetailedBlogsPage({blog, latestBlogs, categroies}: DetailedBlogsPageProps) {
  const handleDate = (date: Date): Date => {
    return new Date(date)
  }
  return (
    <SEO metaTitle={blog.title}>
      <Layout>
        <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px'}}>
          <Box width={{xs: '100%', md: '70%'}}>
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, .5)',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 8px 16px rgba(255, 255, 255, .1)',
              }}
              position={'relative'}
              width={'100%'}
              height={{xs: '30vh', md: '50vh'}}
            >
              <Image src={blog.image.url} alt={blog.title} fill style={{objectFit: 'cover', borderRadius: '10px'}} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} rowGap={'10px'} marginTop={'40px'}>
              <Box sx={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                <Avatar alt={blog.author.name} src={blog.author.avatar.url} />
                <Box>
                  <Typography>{blog.author.name}</Typography>
                  <Box>{ format(handleDate(blog.createdAt), 'dd MMM, yyyy') } &#x2022; {calculateEstimatedTimeToRead(blog.description.text)}min read</Box>
                </Box>
              </Box>
              <Typography variant={'h3'}>
                {blog.title}
              </Typography>
              <Typography color={'gray'}>
                {blog.exerpt}
              </Typography>
              <Divider />
              <div style={{opacity: '.8'}} dangerouslySetInnerHTML={{__html: blog.description.html}}></div>
            </Box>
          </Box>
          <Sidebar latestBlogs={latestBlogs} categroies={categroies} />
        </Box>
      </Layout>
    </SEO>
  )
}

export default DetailedBlogsPage

export const getServerSideProps: GetServerSideProps<DetailedBlogsPageProps> = async ({query}) => {
  const blog = await BlogService.getDetailedBlogs(query.slug as string)
  const latestBlogs = await BlogService.getLatestBlog()
  const categroies = await BlogService.getCategories()
  return {
    props: {
      blog,
      latestBlogs,
      categroies
    }
  }
}

interface DetailedBlogsPageProps {
  blog: BlogsType,
  latestBlogs: BlogsType[],
  categroies: CategoryType[]
}