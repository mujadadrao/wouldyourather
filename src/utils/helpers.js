export function generateId () {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

export function isEmptyArray (array) {
    return !Array.isArray(array) || !array.length;
}

export function isEmptyObject (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
