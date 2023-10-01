// export type Book = {
//   id: number
//   name: string
//   author: string
//   thumbnail: string
//   price: number
//   rating: number
//   featured: boolean
// }

export {}

declare global {
  // export interface Book {
  //   id: number
  //   name: string
  //   author: string
  //   thumbnail: string
  //   price: number
  //   rating: number
  //   featured: boolean
  // }

  type Book = {
    id: number
    name: string
    author: string
    thumbnail: string
    price: number
    rating: number
    featured: boolean
  }
}
