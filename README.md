# tandem-growth
> A project designed to remove the stress of remember when to water your beloved plants...

# Objective
  Your goal is to create an application that generates a watering schedule for the next 12 weeks for all of our plants.

  Use creative license in terms of how you want us to see this schedule. At minimum, the plant caretaker looking at the schedule should be able to easily identify which plants to water on a particular date. It could be a user interface (UI), command-line tool, written to file, etc.
  We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your scheduler even more awesome.

  - We do not water our plants on a weekend. Work-life balance is important, and we shouldn't be in the office on a weekend.
  - Our plants are reasonably tolerant and will still be happy if they are watered a day before or after the day they should be watered.
  - Watering an individual plant takes no time at all so you don't have to worry about how many plants can be watered in a particular day.
  - The scheduling should start from next Monday and last for 12 weeks.
  - All plants will be watered on the first day of the schedule (next Monday).
  - We recognize that when to water a plant is heavily dependent on other factors such as soil, weather, humidity, etc. You can assume that we know exactly when to water these specific plants. You have been provided a JSON file which contains data for our plants.
  - The user can view which plant(s) to water on which date(s).
  - The schedule covers the next 12 weeks starting next Monday.
  - No plants are watered on Saturdays or Sundays.
  - Each plant is watered on its desired schedule or as close as possible, taking into account weekends.

# Challenges
  - Having never worked with calendars or date manipulation it was a fun challenge!
    - Finding a solid library for a calendar...unfortunately the one I landed on ended up not being the most mobile friendly, but a great well documented library nonetheless.
    - Reading through the Moment documentation.

# Future/Upcoming Features:
  - Responsive - mobile friendly
  - Include the built, backend CRUD APIs into application
  - JWT protected routes & frontend signup/login to view calendar

# Notes
  ** Data reformat **
  - I reformatted the given JSON data, I am pulling this from a database & thought it was best stored as a number.
  - I could just as well have parsed the incoming string.
    - From:
      - [
          {
            "name": "Fiddle Leaf Fig", // String
            "water_after": "7 days" // String
          }
        ]
    - To:
      - [
          {
            "name": "Fiddle Leaf Fig", // String
            "days_water_after": 7 // Number
          }
        ]

# Technologies used
  - Node.js (v10.16.0)
  - React (v16.12.0)
  - jQuery
  - Express
  - MongoDB/Mongoose
  - mLab
  - Heroku

# Documentation
  - Calendar: https://fullcalendar.io/docs
  - Moment: https://momentjs.com/
  - Mongoose: https://mongoosejs.com/docs
  - Axios: https://github.com/axios/axios

## Getting started
clone this repo \
install dependencies `npm install && cd client && npm install`

## Avaliable scripts

`npm run server` - start just the server \
`npm run client` - start just the client \
`npm run dev` - start server and client (client requests will be proxied to server) \
