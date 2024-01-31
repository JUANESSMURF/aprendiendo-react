export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src="https://unavatar.io/twitter/kikobeats" alt=""  className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>Bartolomeo Castillo Perez</strong>
                    <span className='tw-followCard-infoUserName'>@bartocast</span>
                </div>
            </header>
            <aside>
                 <button className='tw-followCard-button'>
                    Seguir
                 </button>
            </aside>
        </article>
    )
}