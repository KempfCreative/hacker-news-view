const FormatResponses = function() {
	const formatResponses = {
		associateAuthor: ( authorInfoArray ) => {
            console.log(authorInfoArray);
		},

		formatObjects: (function(){
			// need to format the HTML into an actual text response
			return new Array;
		})(),

		setFormatObjects: authorString => {
			if ( '[object Array]' === Object.prototype.toString.call(authorInfo.authorData) && 0 <= authorInfo.authorData.length ) {
				console.log(authorString);
				return authorInfo.authorData.push(authorString);
			} else {
				return authorInfo.authorData = [];
			}
		},

		sortFormatObjects: () => {
			// sort by karma score
		}
	};
	return formatResponses;
}

const formattedResponse = new FormatResponses();
export default formattedResponse;

