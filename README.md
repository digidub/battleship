# BATTLESHIP

_The_ classic battleships game from when you were a child. This project was built using TDD (Test Driven Development),running tests with Jest for the underlying application logic. The UI was built using React.

## Project Link

[View the project here](https://digidub.github.io/battleship/)

![Game Demo](https://i.imgur.com/jRUX1dD.gif 'Battleships demo')

## Skills Employed

In building this project I leveraged the following concepts and technologies:

- **Test Driven Development (TDD)**
  - Writing tests in Jest for the public facing methods belonging to my factory functions.
  - Utilising Jest methods such as `Describe`, `it` and `expect`.
  - Checking for deep object equality using `toStrictEqual` rather than `toEqual`.
  - Mocking data to improve testing efficiency.
  - Writing tests before application logic enabled me to be more concise and intentional with my code.
- **React - Hookes**
  - useReducer - used to manage complex state changes for the placement of ship objects
- **Styled components**
  - The styled components library was used to couple component logic and styling together for ease of editing.
  - I employed the use of props for conditional formatting, this was particularly useful when building my custom "click and place" ship logic
