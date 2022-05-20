import LoadingStatus from "../loadingStatus"

export const pendingReducer = (state, action) => {
    if (state.loading === LoadingStatus.idle) {
        state.loading = LoadingStatus.pending
        state.currentRequestId = action.meta.requestId
    }
}

export const fulfilledGetAllNoteReducer = (state, action) => {
    const { requestId } = action.meta
    if (
      state.loading === LoadingStatus.pending &&
      state.currentRequestId === requestId
    ) {
      state.loading = LoadingStatus.idle
      state.data = action.payload
      state.currentRequestId = undefined
    }
  }
  
export const fulfilledReducer = (state, action) => {
    const { requestId } = action.meta
    if (
        state.loading === LoadingStatus.pending &&
        state.currentRequestId === requestId
    ) {
        state.loading = LoadingStatus.idle
        state.currentRequestId = undefined
    }
}

export const rejectedReducer = (state, action) => {
    const { requestId } = action.meta
    if (
        state.loading === LoadingStatus.pending &&
        state.currentRequestId === requestId
    ) {
        state.loading = LoadingStatus.idle
        state.error = action.error
        state.currentRequestId = undefined
    }
}