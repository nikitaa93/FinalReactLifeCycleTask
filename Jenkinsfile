pipeline {
    agent any
    environment {
        JENKINS_JAVA_OPTIONS="-Djava.awt.headless=true -Dmail.smtp.starttls.enable=true"
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }
    stages {
        stage('test') {
            steps {
                sh 'echo Testing'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo $DISABLE_AUTH'
                sh 'echo $DB_ENGINE'
                sh 'echo $JENKINS_JAVA_OPTIONS'
            }
        }
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
            script{ 
                emailext(
                    subject: 'LOL',
                    body: 'This is done',
                    recipientProviders: ['nikitajenkins@yopmail.com'],
                )
            }
             mail( to: 'nikitajenkins@yopmail.com',
             subject:  "Yay!!",
             body: "Deployment Successful Pipeline: ${currentBuild.fullDisplayName} ${env.BUILD_URL}"
    )
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
