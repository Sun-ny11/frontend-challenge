type Key = 'userId'

export const setToLocalStorage = (key: Key, value: string) => {
  localStorage.setItem(key, value)
}

export const getFromLocalStorage = (key: Key) => {
  return localStorage.getItem(key)
}
