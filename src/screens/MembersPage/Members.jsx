import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import Submit from "../../components/Submit/Submit";
import { addMember} from "../../store/actions/memberActions";
import { membersErrorSelector } from "../../store/selectors/memberSelector";
import './style.css'
export default function Members({ closeModal }) {
    const [login, setMemberLogin] = useState('')
    const [password, setMemberPassword] = useState('')
    const [logineError, setLoginError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const error = useSelector(membersErrorSelector)
    const dispatch = useDispatch()
    const handleChangeLogin = useCallback((e) => {
        setMemberLogin(e.target.value)
    }, [login])
    const handleChangePassword = useCallback((e) => {
        setMemberPassword(e.target.value)
    }, [password])
    const handleAddMember = useCallback((e) => {
        e.preventDefault()
        if (login.trim().length >= 2) {
            setLoginError('')
            if (password.trim().length >= 8) {
                setPasswordError("")
                dispatch(addMember({ login, password }))
            } else {
                setPasswordError('Password will be longer then 8 elements')
            }
        } else {
            setLoginError("Login will be longer then 2 elements")
        }
    }, [login, password])
    const close = (() => {
        closeModal(false)
    })
    return (
        <div className="inner">
            <div className="input_block mem_block">
                <form className="input_form mem">
                    <div className="cros" onClick={close}>&times;</div>
                    <LoginTitle title='Members' />
                    <div>
                        <input type="text" className="login_input" placeholder="Enter your login" value={login} onChange={handleChangeLogin} />
                        {logineError ? <div style={{ color: 'red' }}>{logineError}</div> : null}
                    </div>
                    <div>
                        <input type="text" className="login_input" placeholder="Enter your password" value={password} onChange={handleChangePassword} />
                        {passwordError ? <div style={{ color: 'red' }}>{passwordError}</div> : null}
                    </div>
                    <Submit handleClick={handleAddMember} />
                    {error ? <div style={{ color: 'red' }}>{error}</div> : null}
                </form>
            </div>
        </div>
    )
}