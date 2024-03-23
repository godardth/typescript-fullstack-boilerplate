node {

    try {
        docker.withRegistry('https://localhost:5001') {
            stage('Configure') {
                sh('./api/configure.sh')
                sh('./web/configure.sh')                
            }
	    stage('Build') {
                apiImage = docker.build("app/api:latest", "./api")
                webImage = docker.build("app/web:latest", "./web")
            }
            stage('Test') {

            }
            stage('Push') {
                apiImage.push('latest')
                webImage.push('latest')
            }
        }
    }

    catch (err) {
        echo "Build failed :face_with_head_bandage: \n`${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"
        throw err
    }

}
