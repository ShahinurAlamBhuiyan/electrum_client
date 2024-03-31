import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home'
import Posts from '../pages/Posts/Posts'
import Docs from '../pages/Docs/Docs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/docs',
        element: <Docs />
      }
    ]
  }
])

export default router
