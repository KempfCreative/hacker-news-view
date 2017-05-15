import storyBodyData from './storyBody';

let articleInfo;
storyBodyData.getStoryBody().then( stories => {
	articleInfo = stories;
});

console.log('JavaScript is amazing!');
