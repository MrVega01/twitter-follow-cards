import '../styles.css'

export default function TwitterFollowCard({ name, userName, isFollowing }){
    return(
        <article className="followCard">
            <header>
                <img src={`https://unavatar.io/${userName}`} alt={`Avatar de @${userName}`}></img>
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>        
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}