import storyBodyData from './storyBody';
import fetchPromise from './fetchData';

const storyBodiesPromise = storyBodyData.getStoryBody();
const AuthorInfo = function() {
	const authorInfo = {
		getAuthorInfo: () => {
			return storyBodiesPromise.then( values => {
				values.forEach( storyObj => {
					let authorId = storyObj.by;
					fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/user/', authorId )
					.then( response => {
						authorInfo.setAuthorInfo(JSON.parse(response));
					}).catch( error => console.error(error) );
				})
				return authorInfo.authorData;
			}).catch( error => console.error(error) );
		},

		authorData: (function(){
			return new Array;
		})(),

		setAuthorInfo: authorString => {
			if ( '[object Array]' === Object.prototype.toString.call(authorInfo.authorData) && 0 <= authorInfo.authorData.length ) {
				return authorInfo.authorData.push(authorString);
			} else {
				return authorInfo.authorData = [];
			}
		}
	};
	return authorInfo;
}

const authorInfoArray = new AuthorInfo();
export default authorInfoArray;