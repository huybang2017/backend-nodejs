sequelize-cli:
--> node_modules/.bin/sequelize init
--> npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
--> npx sequelize-cli db:migrate
--> npx sequelize-cli seed:generate --name demo-user

xampp:
--> sudo /opt/lampp/lampp start

library:
--> npm install --save-dev sequelize-cli@6.2.0
--> npm install --save mysql2@2.2.5
--> npm install --save sequelize@6.6.2
