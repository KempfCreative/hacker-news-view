import authorInfoArray from './authorInfo';
import storyBodyData from './storyBody';
// authorArray needs to be called to get information
// storiesArray already has been called from authorInfo
// const authorInfoPromise = authorArray.getAuthorInfo();
const FormatResponses = function() {
	const formatResponses = {
		associateAuthor: () => {
			const p1 = storyBodyData.getStoryBody();
			const p2 = authorInfoArray.getAuthorInfo();
			
			Promise.all([p1,p2]).then( values => {
				console.log(values);
			}).catch( error => console.error(error) );
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

