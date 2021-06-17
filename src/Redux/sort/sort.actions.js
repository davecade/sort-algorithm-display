import { SortTypes } from './sort.types'
import { createArray } from './sort.utils'

export const generateGraph = () => ({
    type: SortTypes.GENERATE_GRAPH,
    payload: createArray()
})

export const updateGraph = graph => ({
    type: SortTypes.UPDATE_GRAPH,
    payload: graph
})

export const toggleSortRunning = status => ({
    type: SortTypes.TOGGLE_SORT_RUNNING,
    payload: status
})

