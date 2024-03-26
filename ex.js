const playerX = 'x'
const playerO = 'o'
const winningCombinations = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
	[0, 4, 8], [2, 4, 6] // diagonals
]

const cells = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageText = document.getElementById('winningMessageText')
let isPlayerOTurn = false

startGame()

restartButton.addEventListener('click', startGame)

function startGame()
{
	isPlayerOTurn = false
	cells.forEach(cell => {
		cell.classList.remove(playerX)
		cell.classList.remove(playerO)
		cell.removeEventListener('click', handleCellClick)
		cell.addEventListener('click', handleCellClick, { once: true })
	})
	setBoardHoverClass()
	winningMessageElement.classList.remove('show')
}

function handleCellClick(e) {
	const cell = e.target
	const currentClass = isPlayerOTurn ? playerO : playerX
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}
function endGame(isDraw)
{
	if (isDraw)
	{
		winningMessageText.innerText = 'Draw!'
	}
	else
	{
		winningMessageElement.innerText = `Player with  ${isPlayerOTurn ? "O's" : "X's"} Wins!`
	}
	winningMessageElement.classList.add('show')
}

function isDraw()
{
	return [...cells].every(cell => {
		return cell.classList.contains(playerX) || cell.classList.contains(playerO)
	})
}

function placeMark(cell, currentClass)
{
	cell.classList.add(currentClass)
}

function swapTurns()
{
	isPlayerOTurn = !isPlayerOTurn
}

function setBoardHoverClass()
{
	board.classList.remove(playerX)
	board.classList.remove(playerO)
	if (isPlayerOTurn)
	{
		board.classList.add(playerO)
	}
	else
	{
		board.classList.add(playerX)
	}
}


function checkWin(currentClass)
{
	return winningCombinations.some(combination => {
		return combination.every(index => {
			return cells[index].classList.contains(currentClass)
		})
	})
}