function hasAtleastOneResult(results) {
    for (let field of Object.keys(results)) {
        if (Array.isArray(results[field]) && results[field].length > 0) {
            return true;
        }
    }
    return false;
}

export default {
    hasAtleastOneResult
};