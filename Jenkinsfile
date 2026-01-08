pipeline{
  agent {label: "praveen"}
  stages{
    stage("code checkout"){
        steps{
                git branch: "main",
                url: " repo url"
              }
            }
    stage("Installing Dependencies"){
        steps{  
          sh "npm install"                  
      }
}
    stage("Building the Application"){
        steps{  sh "npm run dev"
        }
}
    
    stage("Deployment on nginx"){
        steps{ 
          sh
          '''
          sudo rm -rf /var/www/html/*
          sudo cp -r dist/* /var/www/html/
          '''
          sh "echo deployment successfull!"
    }
}
  }
}
