# docker_scf_vnc
基于腾讯云函数基础镜像，构建的开发环境 vnc+chrome+idea(下载路径)


- image
![image](https://github.com/lianshufeng/docker_scf_vnc/blob/master/images/webstorm.png?raw=true)

- docker-compose.yml
````shell
version: "3"

services:

  scf_vnc:
    image: lianshufeng/scf_vnc
    volumes:
     - ./scf_demo:/headless/Desktop/scf_demo
    ports:
      - "5901:5901"
      - "6901:6901"
    privileged: true
    container_name: scf_vnc
    restart: always
    environment:
      - PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/bin:/opt:/usr/local/cloudfunction/lang/bin:/usr/local/cloudfunction/lang/python3/bin:/usr/local/cloudfunction/lang/php7/bin:/usr/local/cloudfunction/lang/php5/bin:/usr/local/cloudfunction/lang/node12/bin:/usr/local/cloudfunction/lang/node10/bin:/usr/local/cloudfunction/lang/node8/bin:/usr/local/cloudfunction/lang/node6/bin:/usr/local/cloudfunction/lang/java8/bin:/usr/local/cloudfunction/lang/go1/bin
      - VNC_PW=vncpassword
````

- access 
````shell
# browser
http://192.168.80.128:6901/?password=vncpassword

#vnc
192.168.80.128:5901

````
