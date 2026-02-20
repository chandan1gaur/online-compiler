pipeline {
    agent any

    tools {
        nodejs "Node18"
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/chandan1gaur/online-compiler.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        // stage('Lint') {
        //     steps {
        //         sh 'npm run lint'
        //     }
        // }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                npm install -g vercel
                vercel deploy --prod --token=$VERCEL_TOKEN
                '''
            }
        }
    }
}
