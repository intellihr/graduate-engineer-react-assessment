# Graduate React Task - movie watchlist

Your task is to **create a personal movie watchlist** with React. Do your best to complete the task before the due date your hiring manager has given you.

The watchlist **should** have the following features:

- You should be able to record movies that you've watched.
  - When recording a movie as watched, you should record the following:
    - The name of the movie
    - When you watched it, defaulting to today
    - What rating you give the movie (format is up to you)
  - These movies should be saved in the browser using localStorage (https://www.w3schools.com/html/html5_webstorage.asp) so that they are not lost when refreshing the page.
- You should be able to see a list of movies you've watched, in order of watch date (descending).
  - This list should show the name of the movie, watch date, rating, in addition to the following data from the Open Movie Database API (http://www.omdbapi.com/):
    - A poster for the movie
    - The genre/s the movie is in.
- You should be able to see some statistics on your watched movies
  - The average rating you give movies you've watched
  - The total runtime of movies you've watched in the past month
  - Any other statistics you think would be cool to have

If you don't have time to finish a feature, provide a description on how you would solve it if you had more time.

**We will be grading**:
 - **How you structure data for efficiency, and how often you request data from the OMDb API.** Your solution should not require you to perform many requests every time you open the page.
 - Your understanding of React fundamentals. Read through the React documentation carefully (https://reactjs.org/docs/hello-world.html)
 - Your code should be easy to read and maintain. Make sure to check for **typos**.
 - Your ability to take pride and ownership of the project. Try to make something you would be happy to use yourself.

**We will NOT be grading**:
 - Don't build your own backend server. Please do everything in the frontend.
 - Don't spend a lot of time on styling. A simple/plain design is better than trying to impress. Focus on making your UI easy and intuitive to use.
 - Don't reinvent the wheel. Feel free to use third party packages where it makes sense to do so.
 - Don't add gimmicks or other features beyond what is listed in the requirements. We want to see fewer features done well over many features slapped together.

If you have any questions, please don't hesitate to ask your hiring manager via email.

When you're finished please send us your code via Github or a .zip file emailed to your hiring manager. Make sure to delete the `node_modules` folder before you do so.

## Setup
### Windows
#### Prerequisites
**Docker Desktop for Windows** or **NodeJS**

#### Instruction
1. If you are using Docker Desktop for Windows, rename `docker-compose.override.yml.example` to `docker-compose.override.yml` and change the settings to suit your environment
2. With administrative privileges, run `.\bin\start.cmd` on Command Prompt or Powershell

### Unix-Based Operating Systems
#### Prerequisites
**Docker** (**Docker Desktop for Mac** on macOS) or **NodeJS**

#### Instruction
Follow the instruction from **one of the following** depending on which software you have installed.

##### Docker
1. Rename `docker-compose.override.yml.example` to `docker-compose.override.yml` and change the settings to suit your environment
2. Run `./bin/docker` on console

##### Yarn
1. Run `./bin/yarn`

##### NPM
1. Run `./bin/npm`
