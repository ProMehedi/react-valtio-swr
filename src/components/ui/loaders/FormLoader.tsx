const FormLoader = () => {
  return (
    <div className='animate-pulse space-y-6'>
      <div className='space-y-4'>
        <div className='h-4 bg-slate-200 w-24 rounded'></div>
        <div className='h-10 bg-slate-200 rounded'></div>
      </div>
      <div className='space-y-4'>
        <div className='h-4 bg-slate-200 w-24 rounded'></div>
        <div className='h-10 bg-slate-200 rounded'></div>
      </div>
      <div className='space-y-4'>
        <div className='h-4 bg-slate-200 w-24 rounded'></div>
        <div className='h-10 bg-slate-200 rounded'></div>
      </div>
      <div className='grid grid-cols-2 gap-7'>
        <div className='space-y-4'>
          <div className='h-4 bg-slate-200 w-24 rounded'></div>
          <div className='h-10 bg-slate-200 rounded'></div>
        </div>
        <div className='space-y-4'>
          <div className='h-4 bg-slate-200 w-24 rounded'></div>
          <div className='h-10 bg-slate-200 rounded'></div>
        </div>
      </div>
      <div className='grid grid-cols-8 w-60 gap-1'>
        <div className='h-3 bg-slate-300'></div>
        <div className='h-3 bg-slate-300 col-span-7'></div>
      </div>
      <div className='h-10 bg-slate-200 rounded'></div>
    </div>
  )
}

export default FormLoader
