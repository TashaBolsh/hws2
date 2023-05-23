import React from 'react'
import s from './FriendMessage.module.css'
import {friendMessage0, message0} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
export type MessagePropsType = {
    message: {id:number}
}
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName} >
                        {friendMessage0.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText} >
                        {friendMessage0.message.text}
                    </pre>
                </div>
                <img src ={'/hws/src/s2-homeworks/hw01/avatar.png'}
                     id={'hw1-friend-avatar-' + props.message.id} />
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime} >
                {message0.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
