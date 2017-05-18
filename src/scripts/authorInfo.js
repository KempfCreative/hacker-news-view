import fetchPromise from './fetchData';


const AuthorInfo = function() {
	const authorInfo = {
		getAuthorInfo: ( stories ) => {
			return new Promise( ( resolve, reject ) => {
				stories.then( data => {
					const storyData = data;
					const authorArray = storyData.map( singleStory => {
						return fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/user/', singleStory.by )
					});
					Promise.all( authorArray ).then( values => {
						values.forEach( ( response, index ) => {
							authorInfo.setAuthorInfo( storyData[index], JSON.parse(response) );
						})
						console.log("Promise all AUTHOR after forEach");
					}).catch( error => console.error(error) );
				}).then( resolved => resolve( authorInfo.authorData ) )
			}).catch( error => console.error(error) );
		},

		authorData: (() => {
			return [];
		})(),

		setAuthorInfo: ( singleStory, authorObj ) => {
			if ( '[object Array]' === Object.prototype.toString.call( authorInfo.authorData ) && 0 <= authorInfo.authorData.length ) {
				singleStory.by = authorObj;
				authorInfo.authorData.push( singleStory );
			} else {
				return authorInfo.authorData.push( {} );
			}
		}
	};
	return authorInfo;
}

const authorInfoData = new AuthorInfo();
export default authorInfoData;