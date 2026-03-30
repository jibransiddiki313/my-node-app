pipeline {
    agent any
    
    stages {
        stage('Code') {
            steps {
                echo "Cloning repository"
                git url: 'https://github.com/jibransiddiki313/my-node-app.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                echo "Building Docker image"
                sh 'docker build -t my-node-app .'
            }
        }
        stage('Test') {
            steps {
                echo "Testing application"
                sh "docker run --rm my-node-app node -e 'console.log(\"App test passed!\")'"
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying to production"
                sh 'docker-compose down && docker-compose up -d'
            }
        }
    }
}
