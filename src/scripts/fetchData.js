const FetchData = function () {
  const fetchData = {
    get: ( url, optionalId ) => {
      return new Promise( ( resolve, reject ) => {
        const urlPath = undefined !== optionalId && optionalId.length > 0 ? `${url}${optionalId}.json` : url;
        const xhr = new XMLHttpRequest();
        xhr.addEventListener( 'load', function (event) {
          resolve(this.responseText);
        } );
        xhr.open( 'GET', urlPath );
        xhr.send();
      });
    }
  };
  return fetchData;
};

const fetchPromise = new FetchData();
export default fetchPromise;
