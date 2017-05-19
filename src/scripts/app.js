import topStoriesSorted from './topStories';
import storyBodyData from './storyBody';
import authorInfoData from './authorInfo';
import formattedResponse from './formatResponses';
import render from './renderHtml';

const top = topStoriesSorted.storyArray();
const stories = top.then( () => storyBodyData.getStoryBody( top ) );
const authors = stories.then( () => authorInfoData.getAuthorInfo( stories ) );
const htmlObject = authors.then( () => formattedResponse.sortByScore( authors ) );
Promise.all( htmlObject ).then( render.parseObjects( htmlObject ) );

console.log('JavaScript is amazing!');
