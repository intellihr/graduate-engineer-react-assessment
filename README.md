# Graduate React Task

Your task is to **create a cryptocurrency portfolio** with React. Do your best to complete the task before the due date your hiring manager has given you. Features and gimmicks outside of the requirements specified below will **not** be taken into consideration when assessing your code.

The following features are **required**:

- The user can add, edit, and delete transactions
  - A transaction should store the following:
    - The cryptocurrency
    - The amount of units purchased
    - The total price paid for the transaction
- The user can see a list of all of their transactions.
  - This list should be grouped by cryptocurrency
- The user should see a total of how much money (in AUD) that they have spent.

***Optionally***, you may also add functionality to view the current value of the portfolio based on an API. We recommend CoinMarketCap (https://coinmarketcap.com/api/). **This is not necessary in order to pass the assessment**, but if you’re confident that you can execute this successfully, it is a chance for you to showcase additional skills.

**Keep it simple**:

- Don't build your own backend server. We don't expect the data to persist after a page refresh.
- Don't spend a lot of time on styling. A simple/plain design is better than trying to impress us.
- Don't reinvent the wheel. Feel free to use third party packages where it makes sense to do so.
- Build something that you’re proud of and would personally enjoy using. 
- Your code should be easy to read and maintain. 

**Focus on building an app that is pleasant to read (for the development team) and use (for your end users).**

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
