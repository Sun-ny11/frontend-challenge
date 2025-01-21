import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const responseErrorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.code === 'ERR_NETWORK') {
      toast.error(error.message)
    }
    if (error.response?.status) {
      toast.error(error.response.data)
    }
  } else if (error instanceof Error) {
    toast.error(error.message)
  } else {
    toast.error('Something went wrong')
  }
}
