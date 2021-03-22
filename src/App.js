import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / >

            return ( < ChatEngine height = '100vh'
                userName = { localStorage.getItem('username') }
                userSecret = { localStorage.getItem('password') }
                projectID = '2b719952-c365-46bf-b04d-898e14577138'
                renderChatFeed = {
                    (chatAppProps) => < ChatFeed {...chatAppProps }
                    />}
                    onNewMessage = {
                        () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
                    }
                    / >
                );
            };

        export default App;