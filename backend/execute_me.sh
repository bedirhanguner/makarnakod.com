sudo docker build ./codeExecuter/python -t coderunner:python3

sudo docker build ./codeExecuter/golang -t coderunner:golang

sudo docker build ./codeExecuter/javascript -t coderunner:javascript

sudo docker build ./codeExecuter/ruby -t coderunner:ruby

sudo chmod 755 ./codeExecuter/golang/run_input.sh

sudo chmod 755 ./codeExecuter/javascript/run_input.sh

sudo chmod 755 ./codeExecuter/python/run_input.sh

sudo chmod 755 ./codeExecuter/ruby/run_input.sh