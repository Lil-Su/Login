import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/actions/authActions";
import { currentUserSelector } from "../../store/selectors/authSelectors";
import './style.css'
import logo4 from '../../components/Images/logo1.jpg'
export default function Header() {

    const dispatch = useDispatch()
    const currentUser = useSelector(currentUserSelector)
    const activeMember = currentUser.login[0]
    const member = currentUser.login
    const handleLogOut = useCallback(() => {
        dispatch(logOut())
    }, [])
    
    return (
        <div className="inner">
            <div className="header">
                <div className="logo_img">
                    <span className="logo_span">Angel</span>
                    <img src={logo4} alt="" />
                    <span className="logo_span">Wings</span>
                </div>
                <div className="active_user">
                    <div className="activ_user_logo">{activeMember}</div>
                    <div className="memberName">{member}</div>
                    <div className="log_out" onClick={handleLogOut}>Log out</div>
                </div>
            </div>
        </div>
    )
}