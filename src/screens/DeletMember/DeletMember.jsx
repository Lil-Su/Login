import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deletMember } from "../../store/actions/memberActions";
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import Submit from "../../components/Submit/Submit";
import './style.css'


export default function DeletMember() {
    const [login, setLogin] = useState('')
    const [loginError, setLoginError] = useState('')
    const dispatch = useDispatch()
    const handleChangeLogin = useCallback((e) => {
        setLogin(e.target.value)
    })
    const handleSend = useCallback((e) => {
        e.preventDefault()
        if (login.trim().length > 2) {
            setLoginError('')
            dispatch(deletMember({ login }))
        } else {
            setLoginError('Login will be longer when 2 simbol')
        }
    }, [login])
    return (
        <div>
            <div className="inner">
                <div className="inp_block">
                    <form className="inputs">
                        <LoginTitle title='Delet member' />
                        <div>
                            <input type="text" className="input_input" value={login} placeholder="Enter your name" onChange={handleChangeLogin} />
                            {loginError ? <div style={{ color: 'red' }}>{loginError}</div> : null}
                        </div>
                        <Submit handleClick={handleSend} />
                    </form>
                </div>
            </div>
        </div>

    )
}

