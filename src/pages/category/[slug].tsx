import { Content, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blogs.interface'
import { CategoryType } from '@/interfaces/categories.interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogService } from '@/services/blog.service'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

function CategoryDetailedPage({blogs, latestBlogs, categroies}: DetailedCategoriesPageProps) {
  const router = useRouter()
  return (
    <SEO metaTitle={`${router.query.slug}-category`}>
      <Layout>
        <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px'}}>
          <Sidebar latestBlogs={latestBlogs} categroies={categroies} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
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