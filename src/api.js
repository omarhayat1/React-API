import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
headers: {
     Authorization: 'Client-ID LFxyINZvjUetP6ia_uNBnvCc0-HWXMPkOqxg4MtJPw4'
    },
    params: {
        query: term,
    }
    });

  
    return response.data.results;
};


export default searchImages;