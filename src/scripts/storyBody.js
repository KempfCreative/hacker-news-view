import topStoriesSorted from './topStories';
import fetchPromise from './fetchData';

const storyIdsPromise = topStoriesSorted.storyArray();
const StoryBody = function() {
	const storyBody = {
		getStoryBody: () => {
			return storyIdsPromise.then( values => {
				values.forEach( id => {
					fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/item/', id )
					.then( response => {
						storyBody.setStoryData(response);
					}).catch( error => console.log(error) )
				})
				return storyBody.storyData;
			}).catch( error => console.error(error) );
		},

		storyData: (function() {
			return new Array;
		})(),

		setStoryData: data => {
			if ( '[object Array]' === Object.prototype.toString.call(storyBody.storyData) && 0 <= storyBody.storyData.length ) {
				return storyBody.storyData.push(data);
			} else {
				return storyBody.storyData = [];
			}
		}
	};
	return storyBody;
};

const storyBodyData = new StoryBody();
export default storyBodyData;
