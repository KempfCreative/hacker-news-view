import storyBodyData from './storyBody';
import fetchPromise from './fetchData';

const storyBodiesPromise = storyBodyData.getStoryBody();
const AuthorInfo = function() {
	const authorInfo = {
		getAuthorInfo: () => {
			return storyBodiesPromise.then( values => {
				values.forEach( storyBody => {
					console.log(storyBody);
					let authorId = JSON.parse(storyBody).by;
					fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/user/', authorId )
					.then( response => {
						authorInfo.setAuthorInfo(response);
					}).catch( error => console.error(error) );
				})
				return authorInfo.authorData;
			}).catch( error => console.error(error) );
		},

		authorData: (function(){
			return new Array;
		})(),

		setAuthorInfo: authorInfo => {
			if ( '[object Array]' === Object.prototype.toString.call(authorInfo.authorData) && 0 <= authorInfo.authorData.length ) {
				return authorInfo.authorData.push(authorInfo);
			} else {
				return authorInfo.authorData = [];
			}
		}
	};
	return authorInfo;
}

const authorInfoArray = new AuthorInfo();
export { authorInfoArray as authorArray, storyBodiesPromise as storiesArray };