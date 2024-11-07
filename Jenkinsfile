pipeline {
    agent any
    environment { 
        DOCKER_USERNAME = 'bbox1168'
        DOCKER_PASSWORD = credentials('docker-hub-password') 
        IMAGE_NAME = 'bbox1168/app-demo'
        IMAGE_TAG = "1.${env.BUILD_ID}"
    }
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        agent {
            docker {
                image 'node:20-alpine'
                reuseNode true
            }
        }
        stage('Checkout') {
            steps { 
                git branch: 'main', url: 'https://github.com/bangdv3/app-demo.git'
                sh 'echo "Pipeline with docker, build image by host"'
            }
        }
        stage('Build') {
            steps {  
                sh 'docker --version'
                
                sh 'echo "Pipeline with docker"'
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
                
                sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG '
            }
        }
        stage('Test') {
            steps {
                echo "Test Stage"
                sh ''' 
                    echo "Run some commands"
                '''
            }
        }
    }
}