import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home'
import Posts from '../pages/Posts/Posts'
import Docs from '../pages/Docs/Docs'
import QnA from '../pages/QnA/QnA'
import AllComponents from '../pages/AllComponents/AllComponents'
import Feed from '../pages/Feed/Feed'
import Courses from '../pages/Courses/Courses'
import Hunting from '../pages/Hunting/Hunting'
import SignIn from '../pages/Auth/SignIn/SignIn'
import SignUp from '../pages/Auth/SignUp/SignUp'
import AuthProvider from '../components/Auth/contexts/authContext'
import ComponentDetails from '../pages/AllComponents/ComponentDetails/ComponentDetails'
import CourseDetails from '../pages/Courses/CourseDetails'
import JobDetails from '../pages/Hunting/JobDetails'
import { LoadingProvider } from '../Providers'

// Define routes inside the main layout
const mainRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'posts',
    element: <Posts />
  },
  {
    path: 'docs',
    element: <Docs />
  },
  {
    path: 'qna',
    element: <QnA />
  },
  {
    path: 'components',
    element: <AllComponents />
  },
  {
    path: 'components/:component_id',
    element: <ComponentDetails />
  },
  {
    path: 'feed',
    element: <Feed />
  },
  {
    path: 'courses',
    element: <Courses />
  },
  {
    path: 'courses/:course_id',
    element: <CourseDetails />
  },
  {
    path: 'job-hunting',
    element: <Hunting />
  },
  {
    path: 'job-hunting/:job_id',
    element: <JobDetails />
  },
  {
    path: 'sign-in',
    element: <SignIn />
  },
  {
    path: 'sign-up',
    element: <SignUp />
  }
]

// Create the main router with AuthProvider
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <LoadingProvider>
          <Main />
        </LoadingProvider>
      </AuthProvider>
    ),
    children: mainRoutes
  }
])

// Export the router as a component for rendering
export default router
