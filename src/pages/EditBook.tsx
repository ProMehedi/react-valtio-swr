import { useParams } from 'react-router-dom'
import { Layout } from '../components'
import { EditForm } from '../components/books'
import { Alert } from '../components/ui'
import { FormLoader } from '../components/ui/loaders'

const EditBook = () => {
  // Get id from params
  const { id } = useParams()

  // Get book from API
  const isLoading = false
  const isError = false
  const data = {
    id: 1,
    name: 'Book Name',
  } as Book

  return (
    <Layout>
      <main className='py-6 2xl:px-6'>
        <div className='container'>
          <div className='p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto'>
            <h4 className='mb-8 text-xl font-bold text-center'>Edit Book</h4>

            {isLoading && <FormLoader />}

            {!isLoading && isError && (
              <Alert
                height={400}
                title='There was an error while fetching book.'
              />
            )}

            {!isLoading && !isError && data && <EditForm book={data} />}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default EditBook
