# Welcome to Simple Howarts-School Api

Simple Node JS Application for demo purpose, use CI / CD Jenkins deployment into Kubernetes.
This is two services, you can build docker image inside staff and houses folder. 


## How To
Use Minikube in local development. And don't forget activate Ingress in minikube

minikube addons enable ingress

If you want run manually without Jenkins, just apply kube-hogwarts.yml

kubectl apply -f kube-hogwarts.yml

minikube service hogwarts-api-service

kubectl get ingress

and add this line into your /etc/hosts

192.168.64.2 hogwarts-api.info #you can add your own ip address from kubectl get ingress output.

Open hogwarts-api.info with your favourite web browser.

Reference : https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
