export function loopObject(obj, fn) {
  for (const key in obj) {
    const it = {
      isAFunction: typeof obj[key] === 'function',
      isAString: typeof obj[key] === 'string',
      isAnObject: typeof obj[key] === 'object',
      key,
    };
    fn(key, it);
  }
}
