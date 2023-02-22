import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Members from "../MembersPage/Members";
import { membersErrorSelector, membersSelector } from "../../store/selectors/memberSelector";
import Header from "../../components/Header/Header";
import './style.css'
import DeletMember from "../DeletMember/DeletMember";


export default function MainPage() {
    const memberList = useSelector(membersSelector)
    const [openModal, setOpenModal] = useState(false)
    const [isOpenDeletModal, setIsOpenDeletModal] = useState(false)
    const error = useSelector(membersErrorSelector)
    const handleOpenModal = useCallback(() => {
        setOpenModal(true)
    }, [openModal])
    const openDeleteModal = useCallback(() => {
        setIsOpenDeletModal(!isOpenDeletModal);
    }, [isOpenDeletModal])
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
                    {error ? <div style={{ color: 'red' }}>{error}</div> : null}
                </div>
                {memberList.map((el, index) => {
                    return (
                        <div key={index}>
                            <div className="context_block">
                                <div className="member_block">
                                    <div className="member_circle">{el.login[0]}</div>
                                    <div className="mem_login">{el.login}</div>
                                    <div className="delet_open">
                                        <div onClick={openDeleteModal}>x</div>
                                        <div>✎</div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
                {openModal && <Members closeModal={setOpenModal} />}
                {isOpenDeletModal && <DeletMember />}
            </div>
        </div>

    )
}