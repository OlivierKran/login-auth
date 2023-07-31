import React from "react";
import { useAuthDispatch, useAuthState } from'../../Context/context';
import { logout } from '../../Context/actions';
import styles from './dashboard.module.css';

export default function Dashboard(props) {
    const dispatch = useAuthDispatch() // read dispatch method from context
    const userDetails = useAuthState() // read details from context

    const handleLogout = () => {
        logout(dispatch) //call the logout action

        props.history.push('/login') //navigate to logout page on logout
    }
    return(
        <div style={{ padding: 10}}>
            <div className={styles.dashboardPage}>
                <h1>Dashboard</h1>
                <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </div>
            <p>Welcome to the dashboard {userDetails.user.email}</p>
        </div>
    )
}