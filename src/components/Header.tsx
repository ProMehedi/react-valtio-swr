import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  // Get PathName from react-router
  const pathname = useLocation().pathname

  const query = ''

  const [search, setSearch] = React.useState(query)

  // Handle filter change
  const handleSearch = () => {
    // Update query
  }

  return (
    <nav className='py-4 2xl:px-6'>
      <div className='container flex items-center justify-between'>
        <Link to='/' className='text-2xl font-bold'>
          SWR<span className='text-blue-700 text-base'>&</span>Valtio
        </Link>

        <ul className='hidden md:flex items-center space-x-6'>
          <Link
            to='/'
            className={`cursor-pointer ${
              pathname === '/' && 'font-semibold text-blue-700'
            }`}
            id='lws-bookStore'
          >
            <li>Book Store</li>
          </Link>
          <Link
            to='/new-book'
            className={`cursor-pointer ${
              pathname === '/new-book' && 'font-semibold text-blue-700'
            }`}
            id='lws-addBook'
          >
            <li>Add Book</li>
          </Link>
        </ul>

        <form className='flex items-center' onKeyUp={handleSearch}>
          <div className='group relative rounded-md bg-white'>
            <svg
              width='20'
              height='20'
              fill='currentColor'
              className='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              ></path>
            </svg>
            <input
              type='text'
              placeholder='Filter books...'
              className='search pl-9'
              id='lws-search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Header
