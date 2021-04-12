import axios from 'axios';

const KEY = 'AIzaSyB2MS33DZMPQ-LmRW02ULPqU1_6UW0t13E';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       type: 'video',
       maxResults: 5,
       key: KEY
   }
});
