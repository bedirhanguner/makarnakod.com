docker build ./backend/codeExecuter/python -t coderunner:python3

docker build ./backend/codeExecuter/golang -t coderunner:golang

docker build ./backend/codeExecuter/javascript -t coderunner:javascript

docker build ./backend/codeExecuter/ruby -t coderunner:ruby


sudo chmod 755 ./backend/codeExecuter/fizzbuzz/run_input.sh