import { BlogsType } from '@/interfaces/blogs.interface';
import { CategoryType } from '@/interfaces/categories.interface';
import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const BlogService = {
  async getAllBlogs(){
    const query = gql`
      query GetBlogs {
        blogs {
          exerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
    return result.blogs
  },

  async getLatestBlog() {
    const query = gql`
      query GetLatestBlog {
        blogs(last: 2) {
          id
          slug
          title
          createdAt
          image {
            url
          }
          description {
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;
    const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query)
    return result.blogs
  },

  async getCategories(){
    const query = gql`
      query GetCategories {
        categories {
          slug
          label
        }
      }
    `;
    const result = await request<{categories: CategoryType[]}>(graphqlAPI, query)
    return result.categories
  },

  async getDetailedBlogs(slug: string){
    const query = gql`
      query GetDetailedBlog($slug: String!){
        blog(where: {slug: $slug}){
          exerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
            html
          }
        }
      }
    `;
    const result = await request<{ blog: BlogsType }>(graphqlAPI, query, { slug })
    return result.blog
  },

  async getDetailedCategoriesBlog(slug: string) {
    const query = gql`
      query getCategoriesBlog($slug: String!) {
        blogs(where: {category: {slug: $slug}}) {
          exerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, { slug })
    return result.blogs
  }
}