import useSWR from 'swr'
import { useSnapshot } from 'valtio'

import { BookLoader } from '../ui/loaders'
import { Alert } from '../ui'
import { store } from '@store'

import Book from './Book'

import { fetcher } from '@utils'

const BookList = () => {
  // Get books from API
  const { data, isLoading, error } = useSWR<Book[]>('/books', fetcher, {
    // revalidateOnFocus: false,
    // revalidateIfStale: false,
  })

  // Save to Valtio store
  if (data) store.books = data

  // Get books from Valtio store
  const { books } = useSnapshot(store)

  const query = ''
  const searchedBooks = books

  const filter = ''
  const isError = error && error?.message

  console.log(data)

  // Show books
  return (
    <>
      {isLoading && (
        <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <BookLoader />
          <BookLoader />
          <BookLoader />
        </div>
      )}
      {!isLoading && isError && (
        <Alert title='There was an error while fetching Books!' />
      )}
      {!isLoading && !isError && searchedBooks.length === 0 && (
        <Alert title='Sorry, no books found!' />
      )}

      {!isLoading && !isError && searchedBooks.length > 0 && (
        <div className='space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {searchedBooks.map((book: Book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      )}
    </>
  )
}

export default BookList
