/**
 * @File Takes a .env file and parses its key/values into a js object.. and returns it
 *
 * @Author Alexander Bassov Sun Feb 19 2023 5:01:10 PM
 * @Email blackxes.dev@gmail.com
 */

const fs = require("fs");

const parseEnvVariables = (fileName) => {
    if (!fs.existsSync(fileName)) {
        throw new Error(`File '${fileName}' doesn't exists.`);
    }

    const options = { encoding: "utf8", flag: "r" };
    const result =
        fs
            .readFileSync(fileName, options)
            ?.split(/[\n]/)
            .map((s) => s.replace(/[\r]/, "").trim()) || [];
    const variables = {};

    for (let i = 0; i < result.length; i++) {
        const line = result[i];

        // Skip empty and comment lines
        if (!line || line.match(/^\s*#/)) {
            continue;
        }

        const match = line.match(/^\"*(.+?)\"*\s*=\s*\"*(.+?)\"*$/);

        if (!match) {
            throw new Error(
                `Missmatch in envfile '${fileName}' on line ${i}. Please check your syntax.`
            );
        }

        const key = (match && match[1]) || null;
        const value = (match && match[2]) || null;

        if (!key || !value) {
            throw new Error(
                `Couldn't parse variables. Key or value is invalid in '${fileName}' on line ${i}.`
            );
        }

        variables[match[1]] = JSON.stringify(match[2]);
    }

    return variables;
};

module.exports = { parseEnvVariables };
