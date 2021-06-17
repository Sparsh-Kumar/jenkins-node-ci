pipeline {
    agent any
    tools { nodejs "node" }
    stages {
        stage ('Clone') {
            steps {
                echo 'Cloning the Github Repository of Jenkins Test'
                git branch: 'main', credentialsId: 'MyGithubJob', url: 'https://github.com/Sparsh-Kumar/JenkinsTestRepository.git'
            }
        }
        stage ('Install') {
            steps {
                echo 'Installing all the dependencies for node project'
                sh 'npm install'
            }
        }
    }
}