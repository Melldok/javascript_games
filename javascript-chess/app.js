const gameBoard = document.querySelector('#gameboard')
const playerDisplay = document.querySelector('#player')
const infoDisplay = document.querySelector('#infoDisplay')
const width = 8;

//const resetButton = document.querySelector('#resetButton')

// Initial setup
const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

const createBoard = () => {
    startPieces.forEach((startPiece) => {
        const square = document.createElement('div')
        square.classList.add('square')
    })
}
