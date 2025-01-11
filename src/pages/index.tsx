import { Content, Hero, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blogs.interface'
import { CategoryType } from '@/interfaces/categories.interface'
import Layout from '@/layout/layout'
import { BlogService } from '@/services/blog.service'
import { Box, Button } from '@mui/material'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function Index({blogs, latestBlogs, categroies}: HomePageProps) {
  // console.log(blogs, 'blogs')

  return (
    <Layout>
      <Hero blogs={blogs.slice()}/>
      <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px'}}>
        <Sidebar latestBlogs={latestBlogs} categroies={categroies} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
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