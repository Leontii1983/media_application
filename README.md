
In the project directory add dependencies:
### `npm i`

In the project directory, run application:
### `npm start`

In the project directory, run server:
### `npm run server`

Structure of application
src/Components - contain all application components 

MediaFilter - search bar for search by title

MediaForm - form for adding new media

MediaItem - media card with title, rating etc.

MediaList - list of media items

src/UI - library of simple elements button, input etc.

types.ts - contain types props

src/Server - contain simple data base db.json

src/MediaApplication - parent component

Implemented as part of the assignment:
1.Components described in the task with the described functionality
2.Create a mock API
3.Create data model (id: number, title: string, type: string, genre: string, releaseYear: number,rating: number (1-10))
4.Implement CRUD operations with AXIOS (not completely)

As part of the assignment not completed:
1.Adding a state manager
2.Full application verification and debugging
3.Checking all data types for correctness