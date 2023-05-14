import {Configuration} from './generated'
import {environment} from '../environment'

export const getConfiguration = () => {
  return new Configuration({
    basePath: environment.BACKEND_BASE_PATH,
  })
}
