import { Content, Hero, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blogs.interface'
import { CategoryType } from '@/interfaces/categories.interface'
import Layout from '@/layout/layout'
import SEO from '@/layout/seo/seo'
import { BlogService } from '@/services/blog.service'
import { Box, Button } from '@mui/material'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function Index({blogs, latestBlogs, categroies}: HomePageProps) {

  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)}/>
        <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px'}}>
          <Sidebar latestBlogs={latestBlogs} categroies={categroies} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps<HomePageProps> = async() => {
  const blogs = await BlogService.getAllBlogs()
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

interface HomePageProps {
  blogs: BlogsType[],
  latestBlogs: BlogsType[],
  categroies: CategoryType[]
}