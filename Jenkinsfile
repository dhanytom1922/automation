pipeline {
    agent any

    tools {
        nodejs 'node 22.5.1' // Gunakan nama yang sesuai dengan konfigurasi NodeJS
    }
    environment {
    ANDROID_HOME = "${HOME}/Library/Android/sdk"
    ANDROID_SDK_ROOT = "${ANDROID_HOME}"
    PATH = "${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:${env.PATH}"
}


    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/dhanytom1922/automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npm run allure:generate'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}
