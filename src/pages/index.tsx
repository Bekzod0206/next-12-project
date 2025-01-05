import { Content, Hero, Sidebar } from '@/components'
import Layout from '@/layout/layout'
import { Box, Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'

function Index() {
  return (
    <Layout>
      <Hero />
      <Box sx={{display: 'flex', gap: '20px', padding: '20px'}}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default Index