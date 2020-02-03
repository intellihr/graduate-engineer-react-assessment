# Word Master
Hiring assessment for the analytics team using ReactJS.

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

## Project: Word Master
As a part of the hiring assessment, you will tackle an optimization problem by implementing an application using ReactJS.

Given a scenario which you are playing a word game competing with your friends. The game is a lot like Scrabble or Words With Friends, if you've played those. Letters are dealt to players, who then construct one or more words out of their letters. Each **valid** word receives a score, based on the length of the word and the letters in that word.

The rules of the game are as follows:

**Dealing**
- A player is dealt a hand of *n* letters chosen at random.
- The player arranges the hand into **as many words as they want** out of the letters, using each letter at most once.
- Some letters may remain unused (these won't be scored).

**Scoring**
- The score for the hand is the sum of the scores for each valid word formed.
- The score for a word is the sum of the points for letters in the word, multiplied by the length of the word, plus 50 points if all *n* letters are used on the first word created. We have provided a JSON file *src/assets/words.json* which lists all valid words.
- Letters are scored as in Scrabble: A is worth 1, B is worth 3, C is worth 3, D is worth 2, E is worth 1, and so on. We have provided a JSON file *src/assets/letter-values.json* which maps each lowercase letter to its Scrabble letter value.
- For example, "queen" would be worth 70 points ((10 + 1 + 1 + 1 + 1) for the five letters, then multiply by the number of letters to get (10 + 1 + 1 + 1 + 1) x 5 = 70). Be sure to check that the hand actually has 1 "q", 1 "u", 2 "e", and 1 "n" before scoring the word!
- As another example, if *n = 7* and you make the word "waybill" on the first try, it would be worth 155 points (the base score for "waybill" is (4 + 1 + 4 + 3 + 1 + 1 + 1) * 7 = 105, plus an additional 50 point bonus for using all *n* letters).

Since you want to humiliatingly defeat your friends very badly, you are going to exploit your knowledge of computer science and software engineering to implement an interactive ReactJS application which finds the optimal outcome of a game given a hand so that your friends can never win any game.

The definition of the optimal outcome of a game is a way to arrange and play the letters in a hand which results in the highest possible points of the game in total. For example, given a new game with an initial hand of "a r e t i i n", the application should advise you to play "inertia", which you can earn 99 points in total, and there is no other ways to get a better outcome than that.

In short, your ReactJS application needs to be able to receive a list of letters as the input, and generate the optimal solution as the output.

**Examples**

| Hands | Optimal Words Combination | Optimal Score |
|-------|---------------------------|---------------|
| aaaab | aa , aa                   | 8             |
| odgz  | dog                       | 15            |
