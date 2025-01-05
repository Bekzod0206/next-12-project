import { Hero } from '@/components'
import Layout from '@/layout/layout'
import { Button } from '@mui/material'
import Head from 'next/head'
import React from 'react'

function Index() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default Index