pipeline {
  agent any
  stages {
    stage('Test Chrome') {
      steps {
        sh './node_modules/.bin/cypress run --browser chrome'
      }
    }

  }
}