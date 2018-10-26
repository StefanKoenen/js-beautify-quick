import {
    interpret
} from 'js-beautify/js/src/cli';
import {
    Minimatch
} from 'minimatch';
import nopt from 'nopt';
import {
    join
} from 'path';

export default (directory, files, {
    config,
    onWriteFile,
    onExamineFile
} = {}) => {

    const knownOpts = {
        "glob": [String, null]
    }

    const shortHands = {
        "gl": ["--glob"]
    }


    const parsed = nopt(knownOpts, shortHands, process.argv, 2);
    let miniMatch;
    if (parsed.glob != null) {
        miniMatch = new Minimatch(parsed.glob);
    }

    for (const relative of files) {
        onExamineFile && onExamineFile(relative);
        const file = join(directory, relative);

        const process = miniMatch === undefined || miniMatch.match(file);

        if (process) {
            interpret(["-r", "-q", "-f", file], 0);
        }
    }
};