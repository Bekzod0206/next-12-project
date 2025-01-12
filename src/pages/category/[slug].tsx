import { Content, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blogs.interface'
import { CategoryType } from '@/interfaces/categories.interface'
import Layout from '@/layout/layout'
import { BlogService } from '@/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import React from 'react'

function CategoryDetailedPage({blogs, latestBlogs, categroies}: DetailedCategoriesPageProps) {
  console.log(blogs, 'blogs 11')
  console.log(latestBlogs, 'latestBlogs 11')
  console.log(categroies, 'categroies 11')
  return (
    <Layout>
      <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px'}}>
        <Sidebar latestBlogs={latestBlogs} categroies={categroies} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  )
}

export default CategoryDetailedPage

export const getServerSideProps: GetServerSideProps<DetailedCategoriesPageProps> = async ({query}) => {
  const blogs = await BlogService.getDetailedCategoriesBlog(query.slug as string)
  const latestBlogs = await BlogService.getLatestBlog()
  const categroies = await BlogService.getCategories()
  return {
    props: {
      blogs,
      latestBlogs,
      categroies
    }
  }
}

interface DetailedCategoriesPageProps {
  blogs: BlogsType[],
  latestBlogs: BlogsType[],
  categroies: CategoryType[]
}