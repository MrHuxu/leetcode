const simplifyPath = (path: string): string => '/' + path.split('/').reduce((pre: Array<string>, curr: string) => {
    if (!curr.length || curr === '.') return pre;
    if (curr === '..') return pre.slice(0, pre.length - 1);
    return [...pre, curr];
}, []).join('/');

test('71', () => {
    expect(simplifyPath('/home/')).toBe('/home');
    expect(simplifyPath('/../')).toBe('/');
    expect(simplifyPath('/home//foo/')).toBe('/home/foo');
    expect(simplifyPath('/a/./b/../../c/')).toBe('/c');
});