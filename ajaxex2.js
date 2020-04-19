//exercise 2//

function compareTo(num){
	p = new Promise((resolve, reject) => {
	if(num > 50){
		resolve(num + " is greater than 50,success!")
	} else if (num == 50){
		resolve(num + " is equal to 50, that works.")
	
	} else {
		reject(num + " is less than 50, error!")
	}

	})
    return p
}
compareTo(50)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareTo(12)
   .then(result => console.log(result))
   .catch(error => console.log(error))

compareTo(54)
    .then(result => console.log(result))
    .catch(error => console.log(error))