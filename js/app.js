
const getPuzzle = () => {

	return fetch ('http://puzzle.mead.io/puzzle').then((response) => {

		if (response.status === 200){
			 return response.json()
		}
		else
		{
			throw new Error('An error is being occured')
		}

	})

}


	getPuzzle().then((data) => {
		console.log(data.puzzle)
	}).catch((err) => {
		console.log(err)
	})




