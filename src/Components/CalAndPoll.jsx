import React from 'react'
import { Calendar } from 'react-calendar'
import axios from 'axios';
import MyLoader from './MyLoader';
import Notify from 'simple-notify'
import style from '../css/calendar&poll.module.scss'
import 'react-calendar/dist/Calendar.css';
import 'simple-notify/dist/simple-notify.min.css'
import '../css/calendar.scss'
// import Chart from './Chart';

export default function CalAndPoll() {
    const warning = React.useRef()
    // const results = React.useRef()
    const sendBtn = React.useRef()
    const [pollItems, setPollItems] = React.useState([])
    const [userIp, setUserIp] = React.useState('')
    const [users, setUsers] = React.useState([])
    // const [open, setOpen] = React.useState(false)

    // const [isVoted, setIsVoted] = React.useState(false)

    React.useEffect(() => {
        async function getDatas() {
            let items = await axios.get('https://63581c07c27556d28937782a.mockapi.io/voting-poll')
            setPollItems(items.data)
        }
        async function getIp() {
            let ip = await axios.get('https://geolocation-db.com/json/')
            setUserIp(ip.data.IPv4)
        }
        async function getUserList() {
            let user = await axios.get('https://63581c07c27556d28937782a.mockapi.io/voted-users')
            setUsers(user.data)
        }
        getDatas()
        getIp()
        getUserList()
    }, [])

    // let isAuth = users.find(e=> e.name === userIp)
    // localStorage.setItem('isTrue',isAuth === undefined ? false : true)
    const [active, setActive] = React.useState()
    async function postData() {
        if (users !==undefined ? users.find(el => el.name === userIp) === undefined : '') {
            let data = {
                name: userIp
            }
            await axios.put(`https://63581c07c27556d28937782a.mockapi.io/voting-poll/${active}`, { votes: pollItems[active - 1].votes + 1 })
            await axios.post('https://63581c07c27556d28937782a.mockapi.io/voted-users', data)
            console.log('Data was sent successfully');
            new Notify({
                status: 'success',
                title: 'Muvaffaqiyatli',
                text: 'Javobingiz yuborildi.',
                effect: 'fade',
                speed: 300,
                customClass: null,
                customIcon: null,
                showIcon: true,
                showCloseButton: true,
                autoclose: false,
                autotimeout: 3000,
                gap: 20,
                distance: 20,
                type: 1,
                position: 'top right'
            })
        } else {
            setTimeout(() => {
                warning.current.style.display = "block"
                setTimeout(() => (warning.current.style.display = "none"), 2000)
            }, 50)
            console.log('user is checked in voted users list');
            new Notify({
                status: 'warning',
                title: 'Ogohlantirish',
                text: "Siz allaqachon so'rov yuborgansiz",
                effect: 'fade',
                speed: 300,
                showIcon: true,
                showCloseButton: true,
                autoclose: true,
                autotimeout: 2000,
                gap: 20,
                distance: 20,
                type: 1,
                position: 'top right'
            })

        }
    }
    return (
        <div className={style.activation_sect}>
            <div className={style.container}>
                {/* <Chart setOpen={setOpen} open={open}/> */}
                <div className={style.web_activity}>
                    <div className={style.voting_poll}>
                        <h3>Saytning yangi dizayni yoqdimi ?</h3>
                        <div className={style.voting_poll_items}>
                            {
                                pollItems === undefined || pollItems.length === 0 ?
                                    (<MyLoader />)
                                    : pollItems.map((item, index) => {
                                        return (
                                            <div key={index} onClick={() => setActive(item.id)} className={active === item.id ? `${style.voting_poll_item} ${style.active}` : `${style.voting_poll_item}`} >
                                                <div className={style.radio_btn}>
                                                    <div className={active === item.id ? `${style.radio_btn_active} ${style.active_rad}` : `${style.radio_btn_active}`}></div>
                                                </div>
                                                <span>{item.body}</span>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <span className={style.warning} ref={warning}>You have already voted these !</span>
                        <div className={style.options} >
                            <button className={`${style.button} ${style.send}`} ref={sendBtn} onClick={postData}>
                                <span>Yuborish &#10148;</span>
                            </button>
                            <div className={`${style.button} ${style.results}`} >{/*onClick={()=> setOpen(true)}*/}
                                <span>Natijalar</span>
                            </div>
                        </div>
                        <span className={style.voted_people} id="voted">{users.length} answers</span>
                    </div>
                    <Calendar calendarType='ISO 8601' />
                </div>
            </div>
        </div>
    )
}