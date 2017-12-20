const { lstatSync, readdirSync } = require("fs")
const path = require("path")

const isDirectory = dirPath => lstatSync(dirPath).isDirectory();

const getAppDirs = dirPath => {
    return readdirSync(dirPath).filter(name =>
        isDirectory(path.join(dirPath, name))
    );
};

const getAliasesMap = dirPath => {
    return getAppDirs(dirPath).reduce(function(dirsMap, dirName) {
        dirsMap[dirName] = path.join(dirPath, dirName);
        return dirsMap;
    }, {});    
}

module.exports = getAliasesMap;
