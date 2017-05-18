import fetchPromise from './fetchData';


const AuthorInfo = function() {
	const authorInfo = {
		getAuthorInfo: ( stories ) => {
			return new Promise( ( resolve, reject ) => {
				stories.then( data => {
					console.log(data);
					return data.map( singleStory => {
						fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/user/', singleStory.by )
						.then( response => {
							authorInfo.setAuthorInfo( singleStory, JSON.parse(response) );
						}).catch( error => console.error(error) );
					})
				});
			}).catch( error => console.error(error) );
		},

		authorData: (() => {
			return [];
		})(),

		setAuthorInfo: ( singleStory, authorObj ) => {
			if ( '[object Array]' === Object.prototype.toString.call( authorInfo.authorData ) && 0 <= authorInfo.authorData.length ) {
				console.log(singleStory);
				console.log(authorObj);
				singleStory.by = authorObj;
				authorInfo.authorData.push( singleStory );
				console.log(authorInfo.authorData);
			} else {
				return authorInfo.authorData.push( {} );
			}
		}
	};
	return authorInfo;
}

const authorInfoData = new AuthorInfo();
export default authorInfoData;