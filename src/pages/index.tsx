import { Content, Hero, Sidebar } from '@/components'
import { BlogsType } from '@/interfaces/blogs.interface'
import Layout from '@/layout/layout'
import { BlogService } from '@/services/blog.service'
import { Box, Button } from '@mui/material'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function Index(props: HomePageProps) {
  console.log(props, 'props')

  return (
    <Layout>
      <Hero />
      <Box sx={{display: 'flex', gap: '20px', flexDirection: {xs: 'column', md: 'row'}, padding: '20px'}}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps<HomePageProps> = async() => {
  const blogs = await BlogService.getAllBlogs()

  return {
    props: {
      blogs,
    }
  }
}

interface HomePageProps {
  blogs: BlogsType[]
}