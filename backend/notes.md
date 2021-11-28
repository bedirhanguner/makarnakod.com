docker build ./backend/codeExecuter/python -t coderunner:python3

docker build ./backend/codeExecuter/golang -t coderunner:golang

sudo chmod 755 ./backend/codeExecuter/fizzbuzz/run_input.sh