pipelineJob('TypeScript-Fullstack-Boilerplate') {
  definition {
    cpsScm {
      scm {
        git {
          remote {
            url('https://github.com/godardth/typescript-fullstack-boilerplate.git')
          }
          branch('*/main')
        }
      }
    }
  }
  triggers {
    githubPush() 
  }
}
