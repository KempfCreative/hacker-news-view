import fetchPromise from './fetchData';

const StoryBody = function() {
	const storyBody = {
		getStoryBody: ( top ) => {
			return new Promise( ( resolve, reject ) => {
				top.then( ids => {
					const storyArray = ids.map( id => {
						/* running into a race condition where the author calls happen before the story calls happen
						 * need to have an array of Promises return to storyArray.
						 * storyArray should be passed into a Promise.all, and .then returns the values to the object.
						*/
						return fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/item/', id )
						.then( response => {
							storyBody.setStoryData(JSON.parse(response));
						}).catch( error => console.log(error) );
					});
					if ( storyBody.storyData.length === ids.length ) {
						resolve( storyBody.storyData )
					} else {
						console.log( "storyBody storyData length not full" );
					}
				})
			}).catch( error => console.error(error) );
		},

		storyData: (() => {
			return [];
		})(),

		setStoryData: data => {
			if ( '[object Array]' === Object.prototype.toString.call(storyBody.storyData) && 0 <= storyBody.storyData.length ) {
				storyBody.storyData.push(data);
				// console.log(storyBody.storyData);
			} else {
				return storyBody.storyData.push( {} );
			}
		}
	};
	return storyBody;
};

const storyBodyData = new StoryBody();
export default storyBodyData;
