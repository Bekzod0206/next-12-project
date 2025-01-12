import { Content } from "@/components"
import { BlogsType } from "@/interfaces/blogs.interface"
import Layout from "@/layout/layout"
import { BlogService } from "@/services/blog.service"
import { Box } from "@mui/material"
import { GetServerSideProps } from "next"

function BlogPage({blogs}: BlogPageProps) {
  return (
    <Layout>
      <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px', justifyContent: 'center'}}>
        <Content blogs={blogs} />
      </Box>
    </Layout>
  )
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async() => {
  const blogs = await BlogService.getAllBlogs()
  return {
    props: {
      blogs
    }
  }
}

interface BlogPageProps {
  blogs: BlogsType[]
}