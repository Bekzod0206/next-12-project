import { CategoryType } from "@/interfaces/categories.interface"
import Layout from "@/layout/layout"
import { BlogService } from "@/services/blog.service"
import { Box, Button, ButtonGroup, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

function CategoryPage({categories}: CategoryPageProps) {
  const router = useRouter()
  return (
    <Layout>
      <Box
        height={{xs: '30vh', md: '50vh'}}
        width={{ xs: '100%', md: '80%'}}
        marginX={'auto'}
        marginTop={'10vh'}
        borderRadius={'8px'}
        sx={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          rowGap: '20px'
        }}
      >
        <Typography variant="h3" fontFamily={'cursive'}>All categroies</Typography>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {categories.map(item => (
            <Button onClick={() => router.push(`category/${item.slug}`)} key={item.slug}># {item.label}</Button>
          ))}
        </ButtonGroup>
      </Box>
    </Layout>
  )
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async() => {
  const categories = await BlogService.getCategories()
  return {
    props: {
      categories
    }
  }
}

interface CategoryPageProps {
  categories: CategoryType[]
}