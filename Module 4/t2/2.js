'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const queryInput = document.getElementById('query');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting in the traditional way

        const query = queryInput.value.trim();  // Get the user input and remove any extra spaces

        if (query) {
            // Construct the API URL with the user query
            const url = `https://api.tvmaze.com/search/shows?q=${query}`;

            // Use fetch to send the request
            fetch(url)
                .then(response => response.json())  // Convert the response to JSON
                .then(data => {
                    console.log(data);  // Print the search results to the console

                    // Optionally, handle the results (e.g., display them on the page)
                    // For now, this just logs the results
                })
                .catch(error => {
                    console.error('Error fetching data:', error);  // Handle any errors that occur during the fetch
                });
        } else {
            console.log('Please enter a search term.');
        }
    });
});
