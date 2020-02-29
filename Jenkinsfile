env.DOCKER_REGISTRY = 'elqahtani'
env.DOCKER_IMAGE_NAME = 'hogwarts-school'
node('master') {
	stage('HelloWorld') {
      echo 'Hello World'
    }
    stage('Git Pull from Github') {
      git credentialsId: 'github_password', url: 'git@github.com:elqahtani/hogwarts-api.git'
    }
      stage('Build Docker Image') {
        sh "docker build --build-arg APP_NAME=hogwarts-school -t $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:${BUILD_NUMBER} ."   
    }
      stage('Push Docker Image to Dockerhub') {
          sh "docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_NAME:${BUILD_NUMBER}"
    }
      stage('DeployTo Kubernetes Cluster') {
        kubernetesDeploy(
          kubeconfigId: 'kubeconfigbelajarlinux',
          configs: 'hogwarts-school-deployment.yml',
          enableConfigSubstitution: true
        )
    }
}
