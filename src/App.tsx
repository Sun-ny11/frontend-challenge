import { Route, Routes } from 'react-router'
import { Layout } from './common/components/layout/Layout'
import { AllCards } from './features/allCards/ui/AllCards'
import { FavoriteCards } from './features/favoriteCards/ui/FavoriteCards'
import { Path } from './common/enums/enums'

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path={Path.Home}
          element={<AllCards />}
        />
        <Route
          path={Path.Favorite}
          element={<FavoriteCards />}
        />
      </Routes>
    </Layout>
  )
}

export default App
