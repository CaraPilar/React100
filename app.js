const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">Score</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}
const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Cara
            </span>
            <Counter/>
        </div>
    )
}
   
const App = () => {
    return (
        <div className="scoreboard">
            <Header/>
            <Player/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

/**
 * React doesn't touch DOM. Render is used to create actual elements in the DOM.
 * 
 * 
 */