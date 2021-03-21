import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed';
const App = () => {
        return ( < ChatEngine height = '100vh'
            userName = 'Spnetic-5'
            userSecret = 'Pransau511'
            projectID = '2b719952-c365-46bf-b04d-898e14577138'
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />}  / >
            );
        }

        export default App;