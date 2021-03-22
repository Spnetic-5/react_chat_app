import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];
    
    // console.log(chat, userName, messages)
    const renderReadRecipeints = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key = {`read_${index}`}
                className = "read-recipient"
                style = {{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style= {{width: '100%'}}>  
                    <div className="message-block">
                        {
                        isMyMessage
                        ? <MyMessage message={message}/>
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>      
                    <div className="read-reciepts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {renderReadRecipeints(message,isMyMessage)}
                        </div>                     
                </div>
            )
        })   
    }
if (!chat) return 'Loading... ';

    return (
    <div>
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}

                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>

            </div>
        </div>
    </div>
);
}

export default ChatFeed; 