CONTAINER_ID=$(docker create --rm coderunner:ruby ruby main.rb)
docker cp $1 $CONTAINER_ID:/usr/src/app/main.rb
docker cp $2 $CONTAINER_ID:/usr/src/app/known_correct.rb
docker cp $3 $CONTAINER_ID:/usr/src/app/user_submitted_code.rb

docker start --attach $CONTAINER_ID