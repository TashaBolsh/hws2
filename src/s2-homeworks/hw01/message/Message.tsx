import React from 'react'
import s from './Message.module.css'
import {message0} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {id:number}
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src ={'/hws/src/s2-homeworks/hw01/avatar.png'}
                    id={'hw1-avatar-' + props.message.id} />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {message0.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {message0.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {message0.message.time}
            </div>
        </div>
    )
}

export default Message
