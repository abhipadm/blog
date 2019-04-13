export default class ApiService {

  constructor() {

  } // END constructor

  getData(url) { 

   return fetch(url)
      // Get the response
      // If we want text, call response.text()
      .then(response => response.json()      
      )
      .then((data) => {
        // Do something with the response       
        return data;
      });

  }
}
