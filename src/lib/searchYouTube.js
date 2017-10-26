var searchYouTube = (options = {key: YOUTUBE_API_KEY, query: '', max: 5}, callback = () => {}) => {
  // TODO
  console.log('youtube query ', options.query);
  var data = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    type: 'video'
  };
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: data,
    method: 'GET',
    success: (data) => {
      console.log('success'); 
      callback(data.items); 
    },
    error: (data) => {
      console.log('fail');
    }
  });
};

window.searchYouTube = searchYouTube;
