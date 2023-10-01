import { proxy } from 'valtio'

type Filter = 'all' | 'active' | 'completed'
type Todo = {
  id: number
  title: string
  completed: boolean
}

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: 'all',
  todos: [],
})

export const saveTodos = (todos: Todo[]) => {
  store.todos = todos
}
