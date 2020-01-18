Any incoming request made to my port 8080 that request is mapped to the container.

Port forwarding is a runtime constraint "-p 8080:8080"

docker build -t danhagg/docker_node:latest .

docker run -p 8080:8080 danhagg/docker_node