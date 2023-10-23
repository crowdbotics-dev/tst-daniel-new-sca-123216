import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const danielshareable_get_some_read = createAsyncThunk(
  "danielshareable_response_get_Newdatacalls/danielshareable_get_some_read",
  async payload => {
    const response = await apiService.danielshareable_get_some_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const danielshareable_response_get_NewdatacallsSlice = createSlice({
  name: "danielshareable_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(danielshareable_get_some_read.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(danielshareable_get_some_read.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(danielshareable_get_some_read.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  danielshareable_get_some_read,
  slice: danielshareable_response_get_NewdatacallsSlice
}
