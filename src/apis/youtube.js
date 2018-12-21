import axios from 'axios';

const KEY = 'AIzaSyAwAEqe7AUkVvscuwiXxKoaVmYD_hzREfY';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
});