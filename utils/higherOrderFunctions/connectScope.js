export function connectScope(modules, practice) {
    function bindScope(module) {
        let withScope = { ...module };
        loopObject(module, (key, it) => {
            if (it.isAFunction) withScope = { ...withScope, [key]: module[key].bind(this) };
            if (it.isAnObject) withScope = { ...withScope, [key]: this.bindScope(withScope[key]) };
        });
        return withScope;
    }

    this.bindScope = bindScope.bind(this);

    for (const moduleKey in modules) {
        this[moduleKey] = this.bindScope(modules[moduleKey]);
    }
}

export function loopObject(obj, fn) {
    for (const key in obj) {
        let it = {
            isAFunction: typeof obj[key] === 'function',
            isAString: typeof obj[key] === 'string',
            isAnObject: typeof obj[key] === 'object',
            key,
        };
        fn(key, it);
    }
}
