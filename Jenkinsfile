pipeline {
    agent any
    tools {
        nodejs 'NodeJS 22.5.1' // Pastikan nama ini sesuai dengan konfigurasi NodeJS di Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout kode dari GitHub
                git 'https://github.com/dhanytom1922/automation.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies menggunakan npm
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Jalankan tes dengan Allure
                sh 'npm run allure:serve'
            }
        }
    }
    post {
        always {
            // Hasilkan laporan Allure
            allure includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-results']]
            // Arsipkan hasil laporan
            archiveArtifacts artifacts: '**/allure-report/**'
        }
    }
}
