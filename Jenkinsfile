pipeline {
    agent {
        node {
            label 'jenkin_agent_docker'
        }
    }
    environment { 
        IMAGE_NAME = "app-demo" 
        IMAGE_TAG = "${env.BRANCH_NAME}-${env.BUILD_ID}"
    }
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Checkout') {
            steps { 
                git branch: 'main', url: 'https://github.com/bangdv3/app-demo.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    sh '
                        docker build -t app-demo:1.1 .
                    '
                }
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