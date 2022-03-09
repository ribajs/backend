import { Script } from 'vm';
import * as YAML from 'yaml';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { SUPPORTED_TEMPLATE_ENGINES } from '@ribajs/node-ssr';
export const validateThemeConfig = (themeConfig) => {
    if (typeof themeConfig.name !== 'string') {
        throw new Error('The theme config must contain a "name" property of type string!');
    }
    if (typeof themeConfig.assetsDir !== 'string') {
        throw new Error('The theme config must contain a "assetsDir" property of type string!');
    }
    if (typeof themeConfig.viewsDir !== 'string') {
        throw new Error('The theme config must contain a "viewsDir" property of type string!');
    }
    if (!SUPPORTED_TEMPLATE_ENGINES.includes(themeConfig.viewEngine)) {
        throw new Error(`The theme config must contain a "viewEngine" property of a supported template engine string but is "${themeConfig.viewEngine}"!`);
    }
    if (themeConfig.routes) {
        if (!Array.isArray(themeConfig.routes)) {
            throw new Error('Theme config: "routes" property must be an array!');
        }
    }
};
export const validateNestThemeConfig = (nestThemeConfig) => {
    if (typeof nestThemeConfig.themeDir !== 'string') {
        throw new Error('The nest theme config must contain a "themeDir" property of type string!\nThis property is used to find the the current active theme.');
    }
    if (typeof nestThemeConfig.active !== 'string') {
        throw new Error('The nest theme config must contain a "active" property of type string!\nThis property is used to set the current active theme.');
    }
};
export const validateFullThemeConfig = (fullThemeConfig) => {
    validateThemeConfig(fullThemeConfig);
    validateNestThemeConfig(fullThemeConfig);
};
export const loadConfig = async (searchConfigPaths, env) => {
    for (const configPath of searchConfigPaths) {
        if (!existsSync(configPath)) {
            continue;
        }
        if (configPath.endsWith('.ts')) {
            const { transpileModule, ModuleKind } = await import('typescript');
            const tSource = await readFile(configPath, 'utf8');
            const compilerOptions = {
                module: ModuleKind.CommonJS,
            };
            const context = {
                exports: {
                    config: undefined,
                },
                require,
            };
            let jSource = transpileModule(tSource, {
                compilerOptions,
            }).outputText;
            let script = new Script(jSource);
            script.runInNewContext(context);
            if (!context.exports.config) {
                throw new Error(`The theme condig file "${configPath}" needs to export a config method!`);
            }
            const themeConfig = context.exports.config(env);
            script = null;
            jSource = null;
            return themeConfig;
        }
        else if (configPath.endsWith('.js')) {
            const config = await import(configPath);
            return config(env);
        }
        else if (configPath.endsWith('.yaml')) {
            const result = YAML.parse(await readFile(configPath, 'utf8'));
            return result;
        }
        else {
            throw new Error('Config file extension not supported! ' + configPath);
        }
    }
    throw new Error('No config file found! Searched for config files: \n' +
        JSON.stringify(searchConfigPaths, null, 2));
};
//# sourceMappingURL=config.js.map