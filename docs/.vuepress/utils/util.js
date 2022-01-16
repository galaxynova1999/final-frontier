const fs = require('fs');

/**
 * 生成side bar配置
 * @param {string} pathname
 * @param {Map<string, {name: string; order: number; collapsable: boolean}>} pathNameMap
 * @returns {[Array<{title: string; collapsable: boolean; children: string[]}>, string]}
 */
const generateBar = (pathname, pathNameMap) => {
    const directory = fs.readdirSync(pathname);
    /**
     *
     * @type {Array<{title: string; collapsable: boolean; children: string[]}>}
     */
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
    /**
     * @type {string | null}
     */
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
