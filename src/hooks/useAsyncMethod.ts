import {useCallback, useState} from 'react'

type AsyncResult<ResponseData> = {
  data: ResponseData | undefined
  error: unknown
}

type UseAsyncMethodReturn<ResponseData, Params = undefined> = {
  run: (params: Params) => Promise<AsyncResult<ResponseData>>
  data: ResponseData | undefined
  error: unknown | undefined
  loading: boolean
  reset: () => void
}

/**
 * @param asyncMethod should be a memoized method (e.g. wrapped in `React.useCallback`), or an imported function with a constant reference
 */
export const useAsyncMethod = <ResponseData, Params = void>(
  asyncMethod: (params: Params) => Promise<ResponseData>,
): UseAsyncMethodReturn<ResponseData, Params> => {
  const [data, setData] = useState<ResponseData | undefined>(undefined)
  const [error, setError] = useState<unknown>(undefined)
  const [loading, setLoading] = useState(false)

  const callAsyncMethod = useCallback(
    async (params: Params) => {
      setLoading(true)
      try {
        const res = await asyncMethod(params)
        setData(res)
        setError(undefined)
        setLoading(false)
        return {data: res, error: undefined}
      } catch (e) {
        setError(e)
        setLoading(false)
        return {data: undefined, error: e}
      }
    },
    [asyncMethod],
  )

  const resetState = useCallback(() => {
    setData(undefined)
    setError(undefined)
    setLoading(false)
  }, [])

  return {
    run: callAsyncMethod,
    data,
    error,
    loading,
    reset: resetState,
  }
}
