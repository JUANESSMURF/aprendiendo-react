import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    // const formatUseName = (userName) => `@${userName}` /*Se llama a esta funcion para agregar @ a cada username*/
    const formatUserName = (userName) => (<span>@{userName}</span>)


    
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} userName="JE_Odiv" name="JEdiv" />
            <TwitterFollowCard formatUserName={formatUserName} userName="X" name="X" />
            <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk" name="Elon Musk" />
            
        </section>
    )
}