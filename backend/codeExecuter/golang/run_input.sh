CONTAINER_ID=$(docker create --rm coderunner:golang go test main_test.go known_correct.go user_submitted_code.go)
docker cp $1 $CONTAINER_ID:/usr/src/app/main_test.go
docker cp $2 $CONTAINER_ID:/usr/src/app/known_correct.go
docker cp $3 $CONTAINER_ID:/usr/src/app/user_submitted_code.go

docker start --attach $CONTAINER_ID