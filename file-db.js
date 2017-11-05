const jsonfile = require('jsonfile');

module.exports = (options) => {
	const file = options.file;

	return {
		get: () => jsonfile.readFileSync(file),
		put: (data) => {
			const db = jsonfile.readFileSync(file);
			db.data.push(data);
			jsonfile.writeFileSync(file, db);
		}
	};
};
