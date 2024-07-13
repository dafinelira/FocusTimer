import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdonw()

}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function set() {
    
}

export function toggleMusic () {3
    state.isMute = document.documentElement.classList.toggle('music-on')
}

