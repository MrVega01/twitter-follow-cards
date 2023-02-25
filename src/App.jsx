import TwitterFollowCard from './components/TwitterFollowCard'

export default function App(){
    return(
        <div className='App'>
            <TwitterFollowCard userName='reactjs' name='React'/>
            <TwitterFollowCard userName='midudev' name='Miguel Angel Durán'/>
            <TwitterFollowCard userName='GermanGarmendia' name='German'/>
            <TwitterFollowCard userName='SrMalenky' name='Malenkiy Arts'/>
        </div>
    )
}