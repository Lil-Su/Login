import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Submit from "../../components/Submit/Submit";
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import './style.css'
import { logIn } from "../../store/actions/authActions";
import { errorSelector } from "../../store/selectors/authSelectors";
import a3 from '../../components/Images/fone1.jpg'


export default function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const error = useSelector(errorSelector)
    const dispatch = useDispatch();

    const handleChangeLogin = useCallback((e) => {
        setLogin(e.target.value)
    }, [login])
    const handleChangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [password])


    const handleSend = useCallback((e) => {
        e.preventDefault()
        if (login.trim().length >= 2) {
            setLoginError('')
            if (password.trim().length >= 8) {
                setPasswordError("")
                dispatch(logIn({ login, password }))
            } else {
                setPasswordError('Password will be longer then 8 elements')
            }
        } else {
            setLoginError("Login will be longer then 2 elements")
        }
    }, [login, password])

    return (
        <div className="inner-login">
            <div className="img">
                <img src={a3} alt="" />
            </div>
            <div className="login_page">
                <div className="input_block">
                    <form className="input_form inp">
                        <div className="cros">&times;</div>
                        <LoginTitle title='Login' />
                        <div>
                            <input type="text" className="login_input" placeholder="Enter your login" value={login} onChange={handleChangeLogin} />
                            {loginError ? <div style={{ color: 'red' }}>{loginError}</div> : null}
                        </div>
                        <div>
                            <input type="text" className="login_input" placeholder="Enter your password" value={password} onChange={handleChangePassword} />
                            {passwordError ? <div style={{ color: 'red' }}>{passwordError}</div> : null}
                        </div>
                        <Submit handleClick={handleSend} />
                        {error ? <div style={{ color: 'red' }}>{error}</div> : null}
                    </form>
                </div>
            </div>
        </div>
    )
}