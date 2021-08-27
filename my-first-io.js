const fs = require('fs');

try {
	const file = fs.writeFileSync('myfile.txt');
} catch (err) {
	console.log(err);
	console.error(err);
}
