function prepareQuery(queryStr) {
    if (!queryStr 
        || typeof queryStr !== "string"
        || queryStr.trim().length === 0) {
        return null;
    }
    const queryTerms = queryStr.trim().split(" ");
    const lowercaseQueryTerms = queryTerms.map(term => term.toLocaleLowerCase());
    return lowercaseQueryTerms;
}

export default {
    prepareQuery
};