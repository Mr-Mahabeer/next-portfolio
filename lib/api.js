const LATEST_POSTS = `
query AllPosts {
  posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }
}
`;

const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

const getLatestPosts = async () => {
  const data = await fetchAPI(
    LATEST_POSTS,

  )
  return data?.posts?.edges || []
}



export { getLatestPosts, }
