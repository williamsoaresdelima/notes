# notes

Create a new npm project that uses React and any UI framework of your own choosing. Use Node.js with Express or NestJS for the back-end. Use whatever data store you deem appropriate, but it would need to support updating existing records and adding new ones. This application should allow the user to write their own notes in Markdown and save them to the back-end. These notes will be global, there doesn't need to be any authentication. Anyone can add and update any note.

Notes must be displayed as a collection of post-it notes on the dashboard of the application. Notes can be dragged and reordered, and need not conform to a definite grid. The user can stack notes on top of each other at will.

You can use any libraries you deem appropriate, but the ones mentioned above are mandatory to be the core of the application. Don't spend too much time on the design of this, concentrate on making it usable and simple first and foremost.

> Requirements
- Notes must be draggable and the back-end must save their positions
- Notes have no title, only a body
- Users can write Notes in Markdown and that should be rendered in place
- There must be a button on the page for adding a new note
- There must be a button on the notes for removing a note
- All notes are editable by default if the user clicks their text content
- All changes must save automatically
- Display the time and date of creation of each note in one corner

> Extra Credit
- Display an indicator while the notes are saving and notify the user on success or error 
- Warn the user when closing the page if there are pending requests and give them the

> option to stay
- Unit Tests
- Documentation

> Delivery
The project should be added to a public Git repository in any Git host and the link must be sent to us at the end of the deadline or upon completion. The project should include a README.md file outlining the steps to install and run the project. No external dependencies should be necessary to run the project!

# Stack

> Node
- 16.13.2

> Next.js
- 12.1

> React
- 17.0.2

# How Install

After cloning the repository follow the steps below:

> Back-end
- cd api
- npm install
- npm start:dev

> Front-end
- cd ui
- npm install
- npm start



