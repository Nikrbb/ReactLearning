function QuickExample (prop) {
    const { arr } = prop
    function randomLink (links = arr) {
        Array.isArray(links)
        return Array.isArray(links) ?
            links[Math.abs(Math.floor(Math.random() * links.length - 1))]
            : links
    }
    const goTo = () => { window.open(randomLink()) }

    console.log(randomLink()) // Интересно - почему консоль вызывается 2 раза?!
    return <div className="card">
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">Some quick example text to build on the card</p>
            <button onClick={goTo} type="button" className="btn btn-primary">Go somewhere</button>
        </div>
    </div>
}
QuickExample.defaultProps = {
    arr: [
        'https://www.ixbt.com/live/games/nox-nestareyuschaya-klassika.html',
        'https://diablo2.blizzard.com/',
        'https://ru.dotabuff.com/players/70388657',
        'https://auto.ria.com/uk/auto_audi_a4_32490450.html',
        'https://gdb.rferl.org/08610000-0a00-0242-845e-08d9fbb2f7e9_w1200_r1.jpg',
        'https://i.pinimg.com/originals/cc/aa/30/ccaa3008f98375c26a221c85db285909.jpg',
        'https://cs14.pikabu.ru/post_img/big/2021/12/23/8/1640261851119813940.jpg',
        'https://www.youtube.com/watch?v=QGnyN1rtu9Y'
    ],
};

export default QuickExample;