import { useState } from 'react'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './Layouts/RootLayout'
import Home from './pages/Home'
import Search from './pages/Search'
import Weather from './pages/Weather'
import CityWeather, { weatherLoader } from './components/CityWeather'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='weather' element={<Weather/>}>
        <Route path=':city' element={<CityWeather/>} loader={weatherLoader}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
