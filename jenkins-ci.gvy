pipeline {
    agent any
    tools { nodejs "nodejs" }
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

        stage ('Eslint Check') {
            steps {
                echo 'Performing the eslint check'
                sh 'npx eslint app.js'
            }
        }

        stage ('MochaTest') {
            steps {
                echo 'Mocha-Chai Testing'
                sh 'npm run test'
            }
        }

    }
}