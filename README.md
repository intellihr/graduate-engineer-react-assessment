# Cryptocurrency Portfolio
Hiring assessment for frontend web application development using React.

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

## Tips
1. Give running commentary of your thought process so we can best understand your approach.
2. You can use any libraries you want. There's no need to reinvent the wheel.
3. Feel free to Google. We're not testing your memory.
4. We encourage you to ask questions and involve your intelliHR engineer. You can almost think of this as a pair programming exercise.
5. If you'd like to be adventurous (e.g. use Redux, functional programming, etc.), impress us!

## Project: Cryptocurrency Portfolio
Please read all of the project details before starting. Feel free to complete them in any order that makes sense to you.

### User Stories
1. I must be able to record a transaction with the following details:
   - What cryptocurrency was purchased
   - How many units of the cryptocurrency were purchased
   - What was the total purchase price, in AUD, of the transaction
2. I must be able to see a list of all of my recorded transactions grouped by cryptocurrency. For each cryptocurrency owned, show the following:
   - Units owned
   - Total paid in AUD
3. I must be able to see the sum total AUD I have paid for all of my cryptocurrencies.
4. I must be able to delete transactions.
5. I must be able to edit transactions.

### Stretch Goals
1. I may be able to see the value of my cryptocurrencies based on the current price published by an exchange or index website. For example,  CoinMarketCap Public API (https://coinmarketcap.com/api/).

## Completion
When you have finished the assessment and are ready to submit your solution, please run the following script along with your name according to your operating system in order to generate a compressed file consisting of your project files and folders in the `build` folder.

Should something go wrong when executing the script, please compress your project files and folders manually **excluding** the files and folders listed in the `.compressignore` file.

Once you have obtained the compressed file, please submit the file as instructed.

### Windows
With administrative privileges, run `.\bin\compress.cmd YOUR NAME` on Command Prompt or Powershell.

For example, when Amanda Berry finishes her assessment, she will run `.\bin\compress.cmd amanda berry` and find a compressed file (`2000-01-01-amanda-berry.zip`) containing her project files and folders in the `build` folder.

### Unix-Based Operating Systems
Run `./bin/compress YOUR NAME` on your terminal of choice.

For example, when Adam Berry finishes his assessment, he will run `./bin/compress adam berry` and find a compressed file (`2000-01-01-adam-berry.tar.gz`) containing his project files and folders in the `build` folder.
