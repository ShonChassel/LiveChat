import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='9e593c71-f2b5-4659-ae57-302ff6704492'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage