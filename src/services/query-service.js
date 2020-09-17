
class QueryService {
    prepareQuery(queryStr) {
        if (!queryStr 
            || typeof queryStr !== "string"
            || queryStr.trim().length === 0) {
            return null;
        }
        
        const trimmedLowercaseQuery = queryStr.trim().toLocaleLowerCase();
        const queryTerms = trimmedLowercaseQuery.split(" ").filter(term => term !== "");
        
        // Removes any repeating query terms
        const preppedQuery = [...new Set([trimmedLowercaseQuery, ...queryTerms])];

        return preppedQuery;
    }

    queryMatch(data, query) {
        if (query
              && data
              && Array.isArray(query)
              && Array.isArray(data.matching_terms)) {
            for (let term of query) {
                if (data.matching_terms.includes(term)) {
                    return true;
                }
            }
        }
        return false;
    }
};

export default new QueryService();