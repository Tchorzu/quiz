# Quiz Application in React

## Overview

This is a simple quiz application built using React and styled-components. The app presents users with 5 questions. For each question, there are 4 possible answers, but only one is correct. After answering all the questions, the app calculates the user's score and displays the questions along with the user's answers and the correct answers.

Created as part of the [zrozumiecreact.pl](https://zrozumiecreact.pl) course.

## Features

- **5 Questions:** The quiz consists of exactly 5 multiple-choice questions.
- **Single-Choice Answers:** Each question has 4 possible answers, with only one being correct.
- **Instant Feedback:** After completing the quiz, the user is presented with their score and a review of their answers alongside the correct ones.

## Getting started

To run the application follow the steps:

1. **Clone the repository**:
   ```shell
   git clone https://github.com/Tchorzu/quiz
   cd quiz
   ```

2. **Install dependencies**:

   Make sure you have [Node.js](https://nodejs.org/en/download/package-manager) installed, then run:

    ```shell
    npm install
    ```

3. **Start the development server**:

    ```shell
    npm run dev
    ```

## Usage

1. **Answer Questions:** You will be presented with 5 questions, one at a time. Select your answer for each question.
2. **View Results:** Once you answer all question, your score will be displayed along with a review of all the questions, your selected answers, and the correct answers.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.
- **styled-components:** A library for styling React components with tagged template literals.
