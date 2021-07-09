import { SortTypes } from './sort.types'
import { createArray } from '../redux-utils/redux.utils'

export const generateGraph = () => ({
    type: SortTypes.GENERATE_GRAPH,
    payload: createArray()
})

export const updateGraph = graph => ({
    type: SortTypes.UPDATE_GRAPH,
    payload: [...graph]
})

export const toggleSortRunning = status => ({
    type: SortTypes.TOGGLE_SORT_RUNNING,
    payload: status
})


export const updateLeftPointer = idx => ({
    type: SortTypes.UPDATE_LEFT_POINTER,
    payload: idx
})

export const updateRightPointer = idx => ({
    type: SortTypes.UPDATE_RIGHT_POINTER,
    payload: idx
})

export const stopSorting = status => ({
    type: SortTypes.STOP_SORTING,
    payload: status
})
