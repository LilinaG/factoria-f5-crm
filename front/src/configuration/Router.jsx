import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd";
import CommentsIndexByPerson from "../pages/Comments/CommentsIndexByPerson";
import Requirements from "../pages/ConfigurationPages/Requirements";
import PersonStatus from "../pages/ConfigurationPages/PersonStatus";
//import PersonStatusAdd from "../pages/ConfigurationPages/PersonStatusAdd";
import RequirementStatus from "../pages/ConfigurationPages/RequirementStatus";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import PublicAddPerson from "../pages/Person/PublicAddPerson";
import AdminAddPerson from "../pages/Person/AdminAddPerson";
import ShowPerson from "../pages/Person/ShowPerson";
import AllPeople from "../pages/Person/AllPeople";
import IndexPerson from "../pages/Person/IndexPerson";



const Router = createBrowserRouter([
  {
    path: '/home',
    element: <Navigate to='/' />
  },
  {
    path: '/dashboard',
    element: <Navigate to='/' />
  },

  {
    path: '/person/:id',
    element: <ShowPerson />
  },
  {
    path: '/people',
    element: <AllPeople />
  },
  
  {
    path: '/recruitment/selectiondayshow/:id',
    element: <SelectionDayShow />
  },
  {
    path: '/recruitment/selectionday/add',
    element: <SelectionDayAdd />
  },
  

  {
    path: '/',
    element: <DefaultLayout title='Home'/>,
    children:[
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/tracking',
    element: <DefaultLayout title='Seguimiento'/>,
    children:[
      {
        path: '/tracking/bootcamps',
        element: <Dashboard />
      },
      {
        path: '/tracking/coders',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/recruitment/selectionday',
    element: <SelectionDayIndex />
  },

  // Person

  {
    path:'/inscribe',
    element: <PublicAddPerson />
  },

  {
    path:'/recruitment/person/add',
    element: <AdminAddPerson />
  },



  //Connfiguration
  {
    path: '/configuration/requirements',
    element: <Requirements />
  },
  {
    path: '/configuration/person/status',
    element: <PersonStatus />
  },
  /*{
    path: '/configuration/person/status/add',
    element: <PersonStatusAdd />
  },*/
  {
    path: '/configuration/requirement/status',
    element: <RequirementStatus />
  },


  //Comments
  
  {
    path: '/recruitment/comments',
    element: <CommentsIndexByPerson />
  },
])

export default Router;