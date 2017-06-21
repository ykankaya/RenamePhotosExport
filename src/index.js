const fs = require('fs');
const path = require('path');
const moment = require('moment');

const getDirectories = function (basepath) {
    return fs.readdirSync(basepath)
        .filter(file => fs.lstatSync(path.join(basepath, file)).isDirectory())
}

const getDatedDirectories = function (directories) {
    return directories.filter(directory => {
        let date = getDateFromDirectoryName(directory);

        return (date !== null) && date.isValid();
    })
}

const getDateFromDirectoryName = function (directory) {
    let date = directory.split(' ').slice(-3);
    if (date.length === 3) {
        return moment(date.join(' '), 'D MMMM YYYY')
    }
    return null;
}

const getNewDirectoryName = function (directory) {

}

module.exports = {
    getDirectories,
    getDatedDirectories,
    getDateFromDirectoryName,
    getNewDirectoryName
}