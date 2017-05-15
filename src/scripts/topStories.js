import fetchPromise from './fetchData';

const TopStories = function () {
  const topStories = {
    storyArray: () => {
      const fetchIds = fetchPromise.get( 'https://hacker-news.firebaseio.com/v0/topstories.json' );
      fetchIds.then( response => {
        const topStoriesArray = response.slice(1,response.length-1).split(',');
        let topTen,
            topTenObj = {};
        // Pick out 10 random numbers 0 - response.length-1
        while (Object.keys(topTenObj).length < 10) {
            let rand = Math.floor( Math.random() * ( topStoriesArray.length ) );
            topTenObj[topStoriesArray[rand]] = topStoriesArray[rand];
        }
        // Assign to a new array
        topTen = Array.from(Object.keys(topTenObj));
        // Return the new array
        return topTen;
      });
      console.log(fetchIds);
      return fetchIds;
    }
  };
  return topStories;
};

const topStoriesSorted = new TopStories();
export default topStoriesSorted;
