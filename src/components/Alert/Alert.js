import { useState, createContext, useContext } from 'react'
import './Alert.css'


const Notification = ({ message, severity }) => {

    const claseNotification = (severity) => {
        if (severity === 'success') {
            return 'violet'
        }  else {
            return 'red'
        }
    }
    

    if (message === '') {
        return (null)
    }

    return(
        <div className={`alert ${claseNotification(severity)}`}> 
           {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity,setSeverity] = useState('')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        },2000)
    }

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}