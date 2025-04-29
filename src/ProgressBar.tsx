import { FC } from 'react'

type ProgressBarType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string
}

const ProgressBar: FC<ProgressBarType> = ({value, max, makeColor}) => {
    return (
        <div style={{color: makeColor(value / max)}}>
            {value / max * 100} %
            <span style={{width: `${value / max * 100}%`, height: 16, backgroundColor: "red", display: "block"}}/>
        </div>
    )
}

export default ProgressBar