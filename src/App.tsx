import ProgressBar from "./ProgressBar"

const App = () => {
    const makeColor = (percent: number) => {
        const clampedPercent = Math.min(Math.max(percent, 0), 1)
        return `rgb(${clampedPercent * 255}, 0, 0)`
    }

    return (
        <div>
            <ProgressBar value={100} max={200} makeColor={makeColor} />
            <ProgressBar value={50} max={200} makeColor={makeColor} />
            <ProgressBar value={200} max={200} makeColor={makeColor} />
        </div>
    )
}

export default App