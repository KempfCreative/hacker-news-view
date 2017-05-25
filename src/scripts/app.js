import topStoriesSorted from './topStories';
import storyBodyData from './storyBody';
import authorInfoData from './authorInfo';
import formattedResponse from './formatResponses';
import render from './renderHtml';

topStoriesSorted.storyArray()
    .then( topStoryIds => {
        console.log( topStoryIds );
        const storyBodiesPromise = storyBodyData.getStoryBody( topStoryIds );
        console.log( storyBodiesPromise );
        storyBodiesPromise
            .then( topStoryBodies => {
                console.log( topStoryBodies );
                topStoryBodies.forEach( response => {
                    return storyBodyData.setStoryData( JSON.parse(response) );
                });
                return storyBodyData.storyData;
            }).then( storyObjectArray => {
                const authorBodiesPromise = authorInfoData.getAuthorInfo( storyObjectArray );
                console.log(authorBodiesPromise);
                authorBodiesPromise
                    .then( topStoryBodiesWithAuthor => {
                        topStoryBodiesWithAuthor.forEach( ( response, index ) => {
                            return authorInfoData.setAuthorInfo( storyObjectArray[index], JSON.parse(response) );
                        });
                        return authorInfoData.authorData;
                    }).then( fullStoryObject => {
                        return fullStoryObject.sort( ( a, b ) => b.score - a.score );
                    }).then( sortedStories => {
                        console.log( sortedStories );
                        const storiesString = render.parseObjects( sortedStories );
                        document.getElementById( 'news-main' ).innerHTML = storiesString;
                    })
            })
    });

console.log('JavaScript is amazing!');
