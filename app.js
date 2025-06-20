const adviceText = document.querySelector('.advice')
const adviceId = document.querySelector('.header__num')

let apiAdvice

getAdvices()

// Get Advice from API
async function getAdvices() {
	const apiUrl = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}` // cache buster fix to get new quote
	try {
		const response = await fetch(apiUrl)
		apiAdvice = await response.json()
		newAdvice()
	} catch (error) {}
}

function newAdvice() {
	const advice = apiAdvice.slip.advice
	const adviceNum = apiAdvice.slip.id

	adviceText.innerText = advice
	adviceId.innerText = adviceNum
}

document.querySelector('.advice__btn').addEventListener('click', getAdvices)
