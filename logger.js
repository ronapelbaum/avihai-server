module.exports = ()=>{
	return (req, res, next) => {
		console.log(new Date(), req.method, req.url);
		next();
	};
};