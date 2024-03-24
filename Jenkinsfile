pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/godardth/typescript-fullstack-boilerplate.git'
            }
        }
        stage('Configure') {
            steps {
                dir("${workspace}") {
                    sh 'cd api; sh ./configure.sh ../prod/.env'
                    sh 'cd web; sh ./configure.sh ../prod/.env'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    api = docker.build('app/api:latest', './api')
                    web = docker.build('app/web:latest', './web')
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://localhost:5001') {
                        api.push('latest')
                        web.push('latest')
                    }
                }
            }
        }
    }
}
