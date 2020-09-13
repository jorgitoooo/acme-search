
class QueryService {
    prepareQuery(queryStr) {
        if (!queryStr 
            || typeof queryStr !== "string"
            || queryStr.trim().length === 0) {
            return null;
        }
        const queryTerms = queryStr.trim().split(" ");
        const lowercaseQueryTerms = queryTerms.map(term => term.toLocaleLowerCase());
        return lowercaseQueryTerms;
    }

    queryMatch(data, query) {
        let isMatch = false;
        if (query
            && data
            && Array.isArray(query)
            && Array.isArray(data.matching_terms)) {
            query.forEach(term => {
                if (data.matching_terms.includes(term)) {
                    isMatch = true;
                }
            });
        }
        return isMatch;
    }
};

export default new QueryService();