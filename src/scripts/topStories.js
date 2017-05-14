import fetchPromise from './fetchData';

const TopStories = function () {
  const topStories = {
    storyArray: () => {
      fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/topstories.json' )
        .then( ( response ) => {
            console.log( response );
            response.slice(1,res.length-1).split(',')
              .forEach( item => console.log(item) )
        });
    }
  };
  return topStories;
};

const topStoriesSorted = new TopStories();
export default topStoriesSorted;
