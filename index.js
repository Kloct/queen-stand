const config = require("./config")
const gpks = require("fs").readdirSync(require("path").join(__dirname, `gpks/${config.type}`))
exports.ClientMod = class {
    install(installer) { 
        for (let gpk of gpks){
            installer.gpk(`./gpks/${config.type}/${gpk}`)
        }
    }
}