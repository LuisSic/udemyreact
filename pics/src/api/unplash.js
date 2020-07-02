import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID vsoQP-mCretqhOF2Hu7_mbLYneKvKFxul-XNiIH2e2U',
  },
});
