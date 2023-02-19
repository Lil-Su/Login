import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Members from "../MembersPage/Members";
import { logOut } from "../../store/actions/authActions";
import { membersSelector } from "../../store/selectors/memberSelector";
import Header from "../../components/Header/Header";
import './style.css'

export default function MainPage() {

    const memberList = useSelector(membersSelector)
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = (() => {
        setOpenModal(true)
    })
 const handleClick = (()=>{
    console.log('Click clok');
 })
    return (
        <div className="inner">
            <div className="main_page">
                <Header />
                <div className="memb_block">
                    <div className="memb">Members</div>
                </div>
                <div className="add_memb">
                    <div className="add" onClick={handleOpenModal}>+</div>
                    <div className="add_title">Add member</div>
                </div>
                {memberList.map((el, index) => {
                    return (
                        <div key={index}>
                            <div className="context_block">
                                <div className="member_block">
                                    <div className="member_circle">{el.login[0]}</div>
                                    <div className="mem_login">{el.login}</div>
                                    <div className="delet_open">
                                        <div onClick={handleOpenModal}>x</div>
                                        <div onClick={handleOpenModal}>✎</div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
                {openModal && <Members closeModal={setOpenModal} />}
            </div>
        </div>

    )
}