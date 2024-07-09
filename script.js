let tilesPerSide = 0
const body = document.querySelector('body')
const container = document.querySelector('#container')
const button = document.querySelector('button')
const tiles = document.createElement('div') // make divs from scratch

    // console.log(allTiles.length);
tiles.classList.add('tiles') // adding classes to said divs
let allTiles = document.querySelectorAll('.tiles') //update this please
button.addEventListener('click', askForTiles)
function askForTiles() {
    let input = prompt('How many tiles per side?')
    tilesPerSide = input
        if (input > 100) {
            console.log('number too big');
        } else {
            tiles.style.height = (80/tilesPerSide) + 'vh'
            tiles.style.width = (80/tilesPerSide) + 'vh'
            
            for (let i = 0; i < allTiles.length; i++) {
                allTiles[i].remove()
            }

            //should remove before appends, nah MUST
            for (let i = 0; i < tilesPerSide ** 2; i++) {
                const clonedTiles = tiles.cloneNode()
                container.appendChild(clonedTiles)
                clonedTiles.addEventListener('mouseover', function() {
                    this.style.backgroundColor = 'black'
                })
            }
            allTiles = document.querySelectorAll('.tiles') //ok
            console.log(allTiles.length);
}
}