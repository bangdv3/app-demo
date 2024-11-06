# app-demo
App demo for test deployment on docker, k8s,...

First task , try to push to run build ci from jenkins
- jenkin agent: 
    - type: node
    - name: jenkin_agent_docker
    - image: bbox1168/jenkins-ssh-agent:jdk17-docker
    