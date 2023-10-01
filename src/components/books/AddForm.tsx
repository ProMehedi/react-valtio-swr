import React from 'react'
import { useNavigate } from 'react-router-dom'
// Components
import { IconLoader } from '../ui/loaders'
import { Alert } from '../ui'

const AddForm = () => {
  const isLoading = false
  const isError = false
  const isSuccess = false

  const [newBook, setNewBook] = React.useState({
    name: '',
    author: '',
    thumbnail: '',
    price: 0,
    rating: 0,
    featured: false,
  })

  const navigate = useNavigate()

  React.useEffect(() => {
    // Redirect to home page after successful submission
    if (isSuccess) {
      setTimeout(() => {
        navigate('/')
      }, 500)
    }
  }, [isSuccess, navigate])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Add new book
    console.log(newBook)
  }

  return (
    <form className='book-form' onSubmit={handleSubmit}>
      <div className='space-y-2'>
        <label htmlFor='lws-bookName'>Book Name</label>
        <input
          required
          className='text-input'
          type='text'
          id='lws-bookName'
          name='name'
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='lws-author'>Author</label>
        <input
          required
          className='text-input'
          type='text'
          id='lws-author'
          name='author'
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor='lws-thumbnail'>Image Url</label>
        <input
          required
          className='text-input'
          type='text'
          id='lws-thumbnail'
          name='thumbnail'
          value={newBook.thumbnail}
          onChange={(e) =>
            setNewBook({ ...newBook, thumbnail: e.target.value })
          }
        />
      </div>

      <div className='grid grid-cols-2 gap-8 pb-4'>
        <div className='space-y-2'>
          <label htmlFor='lws-price'>Price</label>
          <input
            required
            className='text-input'
            type='number'
            id='lws-price'
            name='price'
            value={newBook.price}
            onChange={(e) =>
              setNewBook({ ...newBook, price: Number(e.target.value) })
            }
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='lws-rating'>Rating</label>
          <input
            required
            className='text-input'
            type='number'
            id='lws-rating'
            name='rating'
            min='1'
            max='5'
            value={newBook.rating}
            onChange={(e) =>
              setNewBook({ ...newBook, rating: Number(e.target.value) })
            }
          />
        </div>
      </div>

      <div className='flex items-center'>
        <input
          id='lws-featured'
          type='checkbox'
          name='featured'
          className='w-4 h-4'
          checked={newBook.featured}
          onChange={(e) =>
            setNewBook({ ...newBook, featured: e.target.checked })
          }
        />
        <label htmlFor='lws-featured' className='ml-2 text-sm'>
          This is a featured book
        </label>
      </div>

      <button
        type='submit'
        className='submit'
        id='lws-submit'
        disabled={isLoading}
      >
        Add Book
        {isLoading && <IconLoader />}
      </button>

      {isError && (
        <Alert height={30} title='There was an error! While adding book.' />
      )}

      {isSuccess && (
        <Alert type='success' height={30} title='Book added successfully!' />
      )}
    </form>
  )
}

export default AddForm
