const BookLoader = () => {
  return (
    <div className='flex bg-white rounded shadow animate-pulse'>
      <div className='w-40 h-auto rounded-none bg-gray-200'></div>
      <div className='p-4 pb-14 text-left space-y-4 flex-1'>
        <div className='flex justify-between'>
          <div className='h-5 w-20 bg-slate-200 rounded'></div>
          <div className='grid grid-cols-2 w-12 gap-1'>
            <div className='h-5 bg-slate-200 rounded'></div>
            <div className='h-5 bg-slate-200 rounded'></div>
          </div>
        </div>
        <div className='h-4 bg-slate-200 rounded'></div>
        <div className='h-4 bg-slate-200 w-60 rounded'></div>
        <div className='h-3 bg-slate-200 w-36 rounded'></div>
        <div className='grid grid-cols-4 w-12 gap-1'>
          <div className='h-2 bg-slate-300'></div>
          <div className='h-2 bg-slate-300'></div>
          <div className='h-2 bg-slate-300'></div>
          <div className='h-2 bg-slate-300'></div>
        </div>
        <div className='h-5 bg-slate-200 w-24 rounded'></div>
      </div>
    </div>
  )
}

export default BookLoader
