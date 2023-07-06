import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'

/* import all component*/
import PageNotFound from './components/PageNotFound'
import Password from './components/Password'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import Register from './components/Register'
import Reset from './components/Reset'
import Username from './components/Username'

/** Auth middleware */

import { AuthorizeUser, ProtectRoute } from './middleware/auth';
/*root router*/

const router = createBrowserRouter([
    {
        path : '/',
        element : <Username/>
    },
    {
        path : '/register',
        element : <Register/>
    },
    {
        path : '/password',
        element :  <ProtectRoute><Password/></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile/></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery/>
    },
    {
        path : '/Reset',
        element : <Reset/>
    },
    {
        path : '*',
        element : <PageNotFound/>
    }
])
function App() {
    return (
        <main>
           <RouterProvider router={router}>

           </RouterProvider>
        </main>
    );
}

export default App;