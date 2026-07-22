import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { About } from './pages/About'
import { Architecture } from './pages/Architecture'
import { Grant } from './pages/Grant'
import { Home } from './pages/Home'
import { Lab } from './pages/Lab'
import { RecipeDetail } from './pages/RecipeDetail'
import { Recipes } from './pages/Recipes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="lab" element={<Lab />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="about" element={<About />} />
          <Route path="grant" element={<Grant />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
