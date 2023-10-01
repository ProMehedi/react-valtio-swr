import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import { Home, AddBook, EditBook } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-book' element={<AddBook />} />
        <Route path='/edit-book/:id' element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
