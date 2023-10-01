import Book from './Book'
import { BookLoader } from '../ui/loaders'
import { Alert } from '../ui'

const BookList = () => {
  const query = ''
  const searchedBooks: Book[] = [
    {
      id: 1,
      name: 'Book Name',
      author: 'Author Name',
      featured: true,
      price: 100,
      rating: 4,
      thumbnail: 'https://source.unsplash.com/random/400x400?book+girl',
    },
    {
      id: 2,
      name: 'Book Name',
      author: 'Author Name',
      featured: true,
      price: 100,
      rating: 4,
      thumbnail: 'https://source.unsplash.com/random/400x400?book+boy',
    },
  ]
  const filter = ''
  const isLoading = false
  const isError = false

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
