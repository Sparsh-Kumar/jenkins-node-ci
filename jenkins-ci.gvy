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
        stage ('parallelExecution') {
            parallel: {

                stage ('CheckEslintErrors') {
                    steps {
                        echo 'Checking eslint errors in the code'
                        sh 'npm run lint-check'
                    }
                }
                stage ('RunningTests') {
                    steps {
                        echo 'Running tests using mocha and chai'
                        sleep 5
                    }
                }
                
            }
        }
    }
}