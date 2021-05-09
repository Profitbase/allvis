import cx from 'classnames'
import styles from "./AdminShell.module.scss"
import logo from './logo.svg'
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { useState} from 'react'


export const AdminShell = () => {

    const [amountOfTweeets, setAmountOfTweets] = useState<number>()
    const [amountOfFacebookPosts, setAmountOfFacebookPosts] = useState<number>()
    const [lunchMonday, setLunchMonday] = useState<string>()
    const [lunchTuesday, setLunchTuesday] = useState<string>()
    const [lunchWednesday, setLunchWednesday] = useState<string>()
    const [lunchThursday, setLunchThursday] = useState<string>()
    const [lunchFriday, setLunchFriday] = useState<string>()
    const [response, setResponse] = useState<string>()
    

    const sendMessage = async () => {
        var data = {
            amountOfTweeets: amountOfTweeets,
            amountOfFacebookPosts: amountOfFacebookPosts,
            lunchMonday: lunchMonday,
            lunchTuesday: lunchTuesday,
            lunchWednesday: lunchWednesday,
            lunchThursday: lunchThursday,
            lunchFriday: lunchFriday
        }
        
        const apiCall = await fetch('api/Mergetable', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        const response = await apiCall.text();
        setResponse(response)
    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div className={cx(styles.informationboard)}>
                <img className={cx(styles.logo)} src={logo} alt="Logo" />
                    <h1 className={cx(styles.title)}>ALLVIS ADMIN SIDE</h1>
                </div>
                    <div className={cx(styles.text)}>
                        <h2>Administrer lysbildefremvisningen</h2>
                        <h3> Antall poster som vises av hvert medie:</h3>
                        <label><AiFillTwitterCircle /> Antall Twitter-poster:  </label>
                        <input id = "1" type = "number"  min="1" max="2" value={amountOfTweeets} onChange = {e => setAmountOfTweets(parseInt(e.target.value))}/>
                        <br />
                        <label><RiFacebookCircleFill/> Atall Facebook-poster:  </label>
                        <input id = "2" type = "number"  min="1" max="2" value={amountOfFacebookPosts} onChange = {e => setAmountOfFacebookPosts(parseInt(e.target.value))}/>
                        <br />
                        <h3>Lunsj for uken:</h3>
                        <label><ImSpoonKnife />Mandag:  </label>
                        <input id = "3" placeholder = "Mandag" value={lunchMonday} onChange = {e => setLunchMonday(e.target.value)}/>
                        <br />
                        <label><ImSpoonKnife />Tirsdag:  </label>
                        <input id = "4" placeholder = "Tirsdag" value={lunchTuesday} onChange = {e => setLunchTuesday(e.target.value)}/>
                        <br />
                        <label><ImSpoonKnife />Onsdag:  </label>
                        <input id = "5" placeholder = "Onsdag" value={lunchWednesday} onChange = {e => setLunchWednesday(e.target.value)}/>
                        <br />
                        <label><ImSpoonKnife />Torsdag:  </label>
                        <input id = "6" placeholder = "Torsdag" value={lunchThursday} onChange = {e => setLunchThursday(e.target.value)}/>
                        <br />
                        <label><ImSpoonKnife />Fredag:  </label>
                        <input id = "7" placeholder = "Fredag" value={lunchFriday} onChange = {e => setLunchFriday(e.target.value)}/>
                        <br />
                        <button type = "submit" onClick = {sendMessage}>Oppdater</button>
                        <br />
                        <h4> {response}</h4>
                    </div>
        </div>
)} 