# docker-basics
Docker basic examples

Step 1:
Create a simple nodeJS express server. `yarn start`

Step 2:
Containerise `docker build -t docker-basic .`

Step 3:
Run! 
```javascript
docker run -t docker-basic
docker run -t --name my-useless-server -p 80:3100 docker-basic
```

Step 4:
Rebuild `docker build -t docker-basic .` and run again
Demonstrate tags, environment, run different images, detached mode
`docker run -t --name my-useless-server -p 80:3100 -e USERNAME=yourname -d docker-basic`

Step 5:
Logs, attaching, exec

Step 6:
Demonstrate volume mounting
`docker run -t --name my-useless-server -p 80:3100 -e USERNAME=yourname -v .:/opt/app -d docker-basic:v1.0.2`

Step 7:
Introducing docker-compose
`docker-compose up`
