// const fs = require('fs');
// const path = require('path');

function logDebug(req, res) {
    try {
        let message = req.params.message;
        writeLog("DEBUG", message);
    } catch (ex) {
        //do nothing
    }
    res.status(200).send({});
}

function logInfo(req, res) {
    try {
        let message = req.params.message;
        writeLog("INFO", message);
    } catch (ex) {
        //do nothing
    }
    res.status(200).send({});
}

function logError(req, res) {
    try {
        let message = req.params.message;
        writeLog("ERROR", message);
    } catch (ex) {
        //do nothing
    }
    res.status(200).send({});
}

function logDebug(req, res) {
    let message = req.params.message;
    writeLog("DEBUG", message);
}

function writeLog(level, message) {
    let logMessage = formatDate(new Date()) + " | " + level + " | " + message;
    console.log(logMessage);
}

function formatDate(date) {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}

module.exports = function (app) {
    app.get('/logDebug/:message', async function (req, res) {
        logDebug(req, res);
    });

    app.get('/logInfo/:message', async function (req, res) {
        logInfo(req, res);
    });

    app.get('/logError/:message', async function (req, res) {
        logError(req, res);
    });
}
