const BookFilter = () => {
  const filter: any = 'all'

  // Get dispatch function

  // Handle filter change
  const handleFilter = (filter: any) => {
    console.log(filter)
  }

  return (
    <div className='flex items-center justify-between mb-12'>
      <h4 className='mt-2 text-xl font-bold'>Book List</h4>

      <div className='flex items-center space-x-4'>
        <button
          className={`lws-filter-btn ${filter === 'all' && 'active-filter'}`}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            filter === 'featured' && 'active-filter'
          }`}
          onClick={() => handleFilter('featured')}
        >
          Featured
        </button>
      </div>
    </div>
  )
}

export default BookFilter
