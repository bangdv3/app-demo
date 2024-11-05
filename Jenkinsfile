pipeline {
    agent {
        node {
            label 'jenkin_agent_docker'
        }
    }
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Build Stage for app-demo"
                sh ''' 
                    docker --version
                '''
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