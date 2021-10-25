# CatsFacts

Project by Bell Avisar.


## Development server
Navigate to the project folder and run `npm install`. Make sure you have `mongo` installed on your machine or simply do `sudo npm install -g mongo`, run mongo and create a local database and a collection called `catsFacts` and `facts` respectively.

#### Creat a database
`use cats-facts`

#### Create a collection
`db.createCollection('facts')`

Run `npm install` in the `server` folder and do `npm serve` before navigating back to the project folder and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.



