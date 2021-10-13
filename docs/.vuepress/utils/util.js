const fs = require('fs');

const generateBar = (pathname, pathNameMap) => {
    const directory = fs.readdirSync(pathname);
    const exportObject = [];
    directory.sort((a, b) => {
        if(pathNameMap.has(a) &&
            pathNameMap.has(b) &&
            pathNameMap.get(a).order > pathNameMap.get(b).order
        ) {
            return 1;
        }
        return -1;
    });
    let firstFileName = null;
    directory.forEach((dir) => {
        if(pathNameMap.has(dir)) {
            const subDir = fs.readdirSync(pathname + `/${dir}`);
            const filenames = subDir.reduce((prev, sub) => {
                if(sub !== 'image' && sub !== 'todo') {
                    const name = sub.split(".")[0];
                    prev.push(`./${dir}/${name}`);
                    if(!firstFileName) {
                        firstFileName = `${dir}/${name}`;
                    }
                }
                return prev;
            }, []);
            if(filenames.length) {
                exportObject.push({
                    title: `${pathNameMap.get(dir).name} (${filenames.length})`,
                    collapsable: pathNameMap.get(dir).collapsable,
                    children: filenames
                })
            }
        }
    })
    return [exportObject, firstFileName];
}

module.exports = {
    generateBar
}
