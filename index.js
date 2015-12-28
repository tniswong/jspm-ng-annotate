var ngAnnotate = require('ng-annotate');

module.exports = {

    translate: function (moduleInfo) {
        moduleInfo.source = ngAnnotate(moduleInfo.source, {});
    }

};