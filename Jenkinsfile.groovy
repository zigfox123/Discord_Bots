pipeline {
    agent any
    
    tools {
        nodejs "NodeJS"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                dir('DJ-bot') {
                    script {
                        if (isUnix()) {
                            sh 'npm install'
                        } else {
                            bat 'npm install'
                        }
                    }
                }
            }
        }
        
        stage('Verify Installation') {
            steps {
                echo 'Verifying installation...'
                dir('DJ-bot') {
                    script {
                        if (isUnix()) {
                            sh 'npm list --depth=0'
                        } else {
                            bat 'npm list --depth=0'
                        }
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo '✓ Build completed successfully!'
        }
        failure {
            echo '✗ Build failed!'
        }
    }
}