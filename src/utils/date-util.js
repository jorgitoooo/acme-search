function createDateStr(date) {
    if (date instanceof Date && !isNaN(date)) {
        return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`
    }
    return "- Unknown -";
}

export default {
    createDateStr
};