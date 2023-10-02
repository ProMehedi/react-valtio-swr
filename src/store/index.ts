import { proxy } from 'valtio'

type Filter = 'all' | 'featured'

export const store = proxy<{ filter: Filter; books: Book[] }>({
  filter: 'all',
  books: [],
})
