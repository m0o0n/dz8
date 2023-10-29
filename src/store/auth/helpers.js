export const handlePending = (state, {payload}) => {
    state.isLoading = true
}
export const handleFulfilled = (state, {payload}) => {
    state.isLoading = false
}
export const handleRejected = (state, {payload}) => {
    state.isLoading = false
    state.err = payload
}
