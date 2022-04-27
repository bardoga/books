export const storageService = {
    loadFromStorage,
    savetoStorage
}



function savetoStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}