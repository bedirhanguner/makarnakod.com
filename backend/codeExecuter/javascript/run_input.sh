CONTAINER_ID=$(docker create --rm coderunner:javascript node .)
docker cp $1 $CONTAINER_ID:/usr/src/app/index.js
docker cp $2 $CONTAINER_ID:/usr/src/app/known_correct.js
docker cp $3 $CONTAINER_ID:/usr/src/app/user_submitted_code.js

docker start --attach $CONTAINER_ID