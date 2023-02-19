import React from 'react'
import style from '../css/calendar&poll.module.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chart({setOpen, open}) {
    // const [poll, setPoll] = React.useState([])
    const popUp = React.useRef()
    const [first, setFirst] = React.useState({})
    const [second, setSecond] = React.useState({})
    const [third, setThird] = React.useState({})
    // const [chartData, setChartData] = React.useState({})
    // const [open, setOpen] = React.useState(false)
    console.log(open);
    React.useEffect(() => {
        (async function () {
            let data = await axios.get('https://63581c07c27556d28937782a.mockapi.io/voting-poll')
            // setPoll(data.data)
            setFirst(data.data[0])
            setSecond(data.data[1])
            setThird(data.data[2])
        })()
    },[])
    let data = {
        labels: [first.body, second.body, third.body],
        datasets: [
            {
                label: ' ovozlar soni',
                data: [first.votes, second.votes, third.votes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ]
            }
        ]
    }

    
    return (
        <div className={style.results_window} onClick={()=>setOpen(false)} ref={popUp} style={open ? {opacity:1, transform:'scale(1)', visibility:'visible', top:0} : {opacity:0, transform:'scale(0)', visibility:'hidden', top:'100%'}}>
            <div className={style.chart}>
                <Doughnut data={data} />
            </div>
        </div>
    )
}
