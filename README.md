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
`docker run -t --name my-useless-server -p 80:3100 -e USERNAME=yourname docker-basic -d`

Step 5:
Logs, attaching, exec