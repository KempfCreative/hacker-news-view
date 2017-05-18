const FormatResponses = function() {
	const formatResponses = {
		sortByScore: richStoryPromise => {
			return richStoryPromise.then( storyPromiseData => {
				return storyPromiseData.sort( ( a, b ) => b.score - a.score );
			}).catch( error => console.error(error) );
		}
	};
	return formatResponses;
}

const formattedResponse = new FormatResponses();
export default formattedResponse;

