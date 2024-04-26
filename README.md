# Camper Rental

This project is a web application for renting campers.

## Features

- Browse a catalog of campers
- Filter the catalog by various attributes (in development, currently available only filter for
  location and vehicle type)
- View detailed information about each camper
- Add campers to a list of favorites
- Read reviews for each camper
- Book a camper for a specific date

## Technical Task

- Implement a camper rental announcement card according to the layout.
- On the first page of the catalog, 4 announcements should be rendered, and the rest - by clicking
  on the Load more button.
- When you click on the "heart" button on the announcement card, it should be added to the list of
  favorites, and the color of the button should change.
- When the page is refreshed, the final result of the user's actions should be fixed. That is, if
  you add an announcement to your favorites and refresh the page - the button still remains in the
  state of "favorite announcement" with the appropriate color.
- If you click on the "heart" button again, the announcement should be removed from the list of
  favorites, and the color of the button should change to the initial state.
- When you click on the Show more button, a modal window with detailed information about the camper
  should open.
- The modal window should close by clicking on the "cross" button, by clicking on the backdrop, and
  by pressing the Esc key.
- The modal window contains information about the features of the camper and reviews about it. The
  rendering of information depends on the state of the active tab.
- The modal window also contains a form for booking a camper, which consists of the fields name,
  email, booking date, and comment. The fields name, email, booking date are mandatory to fill in
  and must pass a check for the validity of the entered values. (In case of invalid data, the form
  is not sent, in case of a valid form - the page is updated).
- The rental price must be written with one value (for example, 8000). In the UI - output through a
  comma (8000,00).

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone https://github.com/mykola-ovchynnik/campers-rental.git`
2. Navigate to the project directory: `cd campers-rental`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`

## Usage

To use the application, open your web browser and navigate to `http://localhost:3000`.

## Contributing

If you want to contribute to this project, please submit a pull request.

## License

This project is licensed under the MIT License.
