git add .

echo 'Enter a commit message:'
read commitMessage

git commit -m "$commitMessage"

git push origin master

read