wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.bashrc
nvm install 8.1.2
nvm use 8.1.2
apt-get install npm
npm install -g pm2 && pm2 kill && pm2 start npm --name "untitled" -- run deploy
