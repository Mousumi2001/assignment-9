import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Rechart from './component/Rechart/Rechart';
import Quiz from './component/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/:id',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/rechart',
          element: <Rechart></Rechart>
        }
      ]
    },
    {
      path: '*',
      element: <h1>it has many work.</h1>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
