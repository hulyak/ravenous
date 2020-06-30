const apiKey = 'hzkML4S-4IZV-EtajLaNGe7fZj_TnYk4OPaZyHJCpQ2Om-suEF85OuumfO9pNjOgMi6WEOI2Svi8O_QY5pKlitR_d3XS0yjK5A4BzPyRlo4o1BrUIdCRmlHwhr76XnYx';
const Yelp = {
  search(term, location, sortBy){
    //  return a promise that will ultimately resolve to our list of businesses.
   return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers : {
      Authorization :`Bearer ${apiKey}`
    }
   }) //fetch /businesses endpoint
   .then((response) => response.json())
   .then((jsonResponse) => {
     if (jsonResponse.businesses) {  //jsonResponse has a businesses key, valid business
       return jsonResponse.businesses.map(business => ({
         id : business.id,
         imageSrc: business.image_url,
         name: business.name,
         address : business.location.address1,
         city : business.location.city,
         state : business.location.state,
         zipCode : business.location.zip_code,
         category : business.categories[0].title,
         rating : business.rating,
         reviewCount : business.review_count
       }));
      }
   });
  }
};

export default Yelp;