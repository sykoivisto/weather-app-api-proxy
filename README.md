# Weather App v2 API proxy

## Description

So last year I built a basic weather app to practice using api calls. [That project](https://github.com/sykoivisto/weather-app) was one of my first times using API's and dynamically adding content to the DOM, and it worked wonderfully.

However, I'm working on a new and better looking front end for a weather app using the API from [Open Weather Map](openweathermap.org), and one thing I wanted to change was adding a way to hide the API key.

The proxy is a very simple setup that works by receiving the request from the front end, and adding the api key to the request before forwarding it to Open Weather Map. After the request is fulfilled, we send the response data back to the front end. In addition to hiding the API key, this solution also allows me to use rate limiting and caching to avoid any other shenanigans.

I will link the front end here when I finish it up

## Credits

Big thank you to [Traversy Media](https://www.youtube.com/@TraversyMedia) on youtube. This project is largely based off of his proxy tutorial, and I learned a lot from his content.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)