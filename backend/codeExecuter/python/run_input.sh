CONTAINER_ID=$(docker create --rm coderunner:python3 python main.py)
docker cp $1 $CONTAINER_ID:/usr/src/app/main.py
docker cp $2 $CONTAINER_ID:/usr/src/app/known_correct.py
docker cp $3 $CONTAINER_ID:/usr/src/app/user_submitted_code.py

docker start --attach $CONTAINER_ID