//Select Dev or PRD credentials
if(process.env.NODE_ENV ==='production'){
	module.exports = require('./prod')
}else {
	module.exports = require('./dev')
}