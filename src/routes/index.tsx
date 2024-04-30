import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Posts from '../pages/posts'
import PostComment from '../pages/PostComment'
import ProtectedRoute from './ProtectedRoute'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />} >
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<PostComment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router