import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import JobInfo from  './views/JobInfo/JobInfo';
import News from './views/News/News';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import Setting from './views/Setting/Setting';
import RecuriterProfile from './views/RecuriterProfile/RecuriterProfile';
import AddPost from './views/AddPost/AddPost';
import ViewPost from './views/ViewPost/ViewPost';
import UserProfile from './views/UserProfile/UserProfile';
import Users from './views/Users/Users';
import RecuriterProfileCard from './views/RecuriterProfileCard/RecuriterProfileCard';
import 'remixicon/fonts/remixicon.css'
import { Toaster } from 'react-hot-toast';
import Chat from './views/Chat/Chat';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/job/:id",
    element: <JobInfo />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recuiter-profile-card",
    element: <RecuriterProfileCard />,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/profile",
    element: <RecuriterProfile />,
  },
  {
    path: "/addpost",
    element: <AddPost />,
  },
  {
    path: "/viewpost",
    element: <ViewPost />,
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },{
    path:'chat',
    element:<Chat/>
  }
]);

root.render(
<>

<RouterProvider router={router}/> 
<Toaster/>
</>);