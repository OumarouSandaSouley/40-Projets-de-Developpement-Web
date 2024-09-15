const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')
const resetBtn = document.querySelector('#reset')
const time = document.querySelector('#time')


let [hours, minutes, seconds] = [0, 0, 0]
let playing = false


const updateDisplay = ()=>{
    let h = hours < 10 ?"0"+hours:hours
    let m = minutes < 10 ?"0"+minutes:minutes
    let s = seconds < 10 ?"0"+seconds:seconds
    time.innerHTML = h+":"+m+":"+s
}

const resetWatch = ()=>{
    clearInterval(timer)
    hours  = 0
    minutes = 0
    seconds = 0
    time.innerHTML = "00:00:00"
}

const updateWatch = () =>{
    seconds ++
    if (seconds == 60) {
        seconds = 0
        minutes ++
        if (minutes == 60) {
            minutes = 0
            hours ++
        }
    }
    updateDisplay()
}
const launchWatch = ()=>{
    playing = true
    timer = setInterval(() => {
        updateWatch()
    }, 1000);
}







playBtn.addEventListener('click', ()=>{
    if (!playing) {
            launchWatch()
    }
})
pauseBtn.addEventListener('click', ()=>{
    clearInterval(timer)
    playing = !playing
})
resetBtn.addEventListener('click', ()=>{
    resetWatch()
})