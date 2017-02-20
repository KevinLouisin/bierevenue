exports.initUsers = function(database){

	var userCollection = database.collection('users')

	//Toto
	var key1 = {'username': 'toto'}
	var toto = {
		'username': 'toto',
		'password': 'toto'
	}

	//Titi
	var key2 = {'username': 'titi'}
	var titi = {
		'username': 'titi',
		'password': 'titi'
	}

	//Foo
	var key3 = {'username': 'foo'}
	var foo = {
		'username': 'foo',
		'password': 'bar'
	}

	//Insert
	userCollection.update(key1, toto, {upsert: true})
	userCollection.update(key2, titi, {upsert: true})
	userCollection.update(key3, foo, {upsert: true})

}
