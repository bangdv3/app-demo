pipeline {
    agent {
        node {
            label 'jenkin_agent'
        }
    }
    trigger {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Build Stage"
                sh ''' 
                    echo "Run some commands"
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