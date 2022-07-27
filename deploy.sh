git rm -r --cached . &&
git add . &&
git commit -m "屏蔽" &&
git branch -M master &&
git remote rm origin &&
git remote add origin git@github.com:ericasun/goal-Vue3-wheel-code.git &&
git push -f -u origin master &&
cd -
echo "——————————success————————"

rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ericasun/goal-Vue3-wheel.git &&
git push -f -u origin main &&
cd -
echo "——————————Website————————"
echo https://ericasun.github.io/goal-Vue3-wheel/index.html#/
