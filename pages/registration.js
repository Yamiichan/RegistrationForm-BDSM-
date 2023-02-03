import {useState} from 'react'
import axios from 'axios'
import styles from "./regform.module.css";
 

export default function RegisterForm() {
    const [registerFirstName, setRegisterFirstName] = useState ('')
    const [registerLastName, setRegisterLastName] = useState ('')
    const [registerEmail, setRegisterEmail] = useState ('')
    const [registerPhoneNumber, setRegisterPhoneNumber] = useState ('')
    const [registerAddress, setRegisterAddress] = useState ('')
    const [registerOldTUPStudent, setRegisterOldTUPStudent] = useState('')
    const [registerReasonofRegistration, setRegisterReasonofRegistration] = useState('')

    const regform = () => {
        axios({
            method:"post",
            data: {
                FirstName: registerFirstName,
                LastName: registerLastName,
                Email: registerEmail,
                PhoneNumber: registerPhoneNumber,
                Address: registerAddress,
                OldTUPStudent: registerOldTUPStudent,
                ReasonofRegistration: registerReasonofRegistration
            },
            withCredentials: true,
            url: "http://localhost:3002/register"
        }).then(res => {console.log(res)}).catch(err=> {console.log(err)})
    }

    return(
        <div className={styles.container}>
            <center> <h1>Student Registration Form</h1></center>
                <div className={styles.body}>
                    <label>FirstName</label>
                    <input type="text" name="firstname" placeholder='FirstName' size="15" onChange={e => setRegisterFirstName(e.target.value)} required></input> <br></br>
                    <label>LastName</label>
                    <input type="text" name ="lastname" placeholder='LastName' size="15" onChange={e => setRegisterLastName(e.target.value)} required></input> <br></br>
                    <label> Email </label>
                    <input type="text" placeholder="Enter Email" name="email" onChange={e => setRegisterEmail(e.target.value)} required></input><br></br>
                    <label> Phone Number </label>
                    <input type="text" name="phonenumber" placeholder='PhoneNumber' size="10" onChange={e => setRegisterPhoneNumber(e.target.value)} required></input><br></br>
                    <label> Address </label>
                    <input type="text" name="address" placeholder='Enter Address' size="15" onChange={e => setRegisterAddress(e.target.value)}required></input><br></br>
                    <label>Are You Old TUP Student?</label><br></br>
                    <input type="text" name="OldTUPStudent" placeholder='Yes or No' onChange={e => setRegisterOldTUPStudent (e.target.value)} required></input><br></br>
                    <label> Reason of Registration </label>
                    <textarea id='ReasonofRegistration' name='ReasonofRegistration' placeholder='Reason of Registration' rows="4" cols="50" onChange={e => setRegisterReasonofRegistration (e.target.value)} required></textarea>
                    <a href="registration">
                    <button onClick={regform}>Submit</button>
                    </a>
                </div>
        </div>
    )
}

