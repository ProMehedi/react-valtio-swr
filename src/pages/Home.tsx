import { Layout } from '../components'
import { BookFilter, BookList } from '../components/books'

const Home = () => {
  return (
    <Layout>
      <main className='py-12 px-6 2xl:px-6 container'>
        <div className='order-2 xl:-order-1'>
          <BookFilter />

          <BookList />
        </div>
      </main>
    </Layout>
  )
}

export default Home
