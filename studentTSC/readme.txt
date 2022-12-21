npm run tsc (builds)

if you want to rebuild though....
docker compose down
...delete the build folder
docker compose build --no-cache
docker compose up

OR

start the container on docker hub
...mgo I think it's called
this one runs the existing server..?
npm run dev
( this is where run dev goes and runs the code in package.json under "dev")