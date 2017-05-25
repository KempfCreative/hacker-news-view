const FormatResponses = function() {
	const formatResponses = {
		sortByScore: richStoryPromise => {
            return new Promise( ( resolve, reject ) => {
		        resolve( richStoryPromise.sort( ( a, b ) => b.score - a.score ) );
            })
		}
	};
	return formatResponses;
}

const formattedResponse = new FormatResponses();
export default formattedResponse;

