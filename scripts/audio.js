const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
let audioSource
let analyzer
console.log(canvas.width)


let audio1 = document.getElementById('audio1')
audio1.addEventListener('play', () => {
    console.log('playing sound..')
    const audioCtx = new AudioContext()
    audioSource = audioCtx.createMediaElementSource(audio1)
    analyzer = audioCtx.createAnalyser()
    audioSource.connect(analyzer)
    analyzer.connect(audioCtx.destination)
    analyzer.fftSize = 64
    const bufferLength = analyzer.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    const barWidth = canvas.width / bufferLength
    let barHeight
    let x

    function animate() {
        x = 0
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        analyzer.getByteFrequencyData(dataArray)

        
        const colors = ['255,0 ,0', '79, 121, 66', '0, 0, 255', '149, 53, 83', '255,192,203', '255, 255, 0', '143, 0, 255', '165, 42, 42', '255,165,0']

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            ctx.fillStyle = `rgba(${colors[i%colors.length]}, 0.6)`
            
            ctx.fillRect(x, canvas.height - barHeight*2, barWidth, barHeight*2, 50)
            
            x += barWidth
        }

        requestAnimationFrame(animate)
    }

    animate()
})
