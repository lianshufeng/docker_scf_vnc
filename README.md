# docker_scf_vnc
基于腾讯云函数基础镜像，构建的开发环境 vnc+chrome+idea(下载路径)

- docker-compose.yml
````shell
version: "3"

services:

  centos_vnc:
    build:
      # args:
        # http_proxy: http://192.168.0.37:707
        # https_proxy: http://192.168.0.37:707
      context: ./
      dockerfile: Dockerfile
    image: lianshufeng/centos_vnc
    ports:
      - "5901:5901"
      - "6901:6901"
    privileged: true
    container_name: centos_vnc
    restart: always
    environment:
      - VNC_PW=vncpassword
      # - DEBUG=true
````

- access 
````shell
# browser
http://192.168.80.128:6901/?password=vncpassword

#vnc
192.168.80.128:5901

````
