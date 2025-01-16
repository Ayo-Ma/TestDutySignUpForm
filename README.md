# Project Setup

## Clone the Repository
-- using this command: git clone [https://github.com/Ayo-Ma/TestDutySignUpForm.git]
-- clone the repository to any folder of your choice

## Node Js
Install Node : [https://nodejs.org/en]

## Run the command
-- run npm install 

## Start the project
-- Npm Run Dev to start the project

## Push back to the repository when Done
## Steps to Push a Cloned Repository to the Original Repository
### Navigate to Your Local Repository Open a terminal or command prompt and navigate to the folder where your cloned repository exists.


cd path/to/your/cloned/repository
### Check the Current Remote URLs Use the following command to check the remote repositories configured for the project:
#### git remote -v
This will show something like:

-- origin  https://github.com/your-username/your-forked-repo.git (fetch)
-- origin  https://github.com/your-username/your-forked-repo.git (push)
-- Add the Original Repository as Upstream (if needed) If the original repository isn't already listed, add it as a remote:

### git remote add upstream https://github.com/original-owner/original-repo.git
#### Check the remotes again to verify:

git remote -v
You should now see:

origin   https://github.com/your-username/your-forked-repo.git (fetch)
origin   https://github.com/your-username/your-forked-repo.git (push)
upstream https://github.com/original-owner/original-repo.git (fetch)
upstream https://github.com/original-owner/original-repo.git (push)
Fetch the Latest Changes from Upstream Sync your local repository with the original repository:

git fetch upstream
#### Merge or Rebase Changes (Optional) Before pushing, you might want to integrate the latest changes from the original repository (upstream) into your local branch.
To merge:

git merge upstream/main
To rebase:

git rebase upstream/main
Push Changes to the Original Repository If you have write access to the original repository, you can push your changes directly:

git push upstream main
If you don't have write access, you'll need to create a pull request. Push your changes to your own repository first:




