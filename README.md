# Steps to clone template

1. Create folder `backend` for your project and cd into it

2. Perform the following commands in the command line
```bash
git clone https://github.com/SEB-PT-9-Bahrain/challenge-4-backend.git .
rm -rf .git
rm README.md
```

3. Create a .env file with the following values:
```
MONGODB_URI=mongodb://localhost:27017/olympics-3
PORT=3000
CLIENT_URL=http://localhost:5173
```


4. run:
```bash
npm i
```

5. run:
```bash
node seed.js
```

6. run:
```bash
npm run dev
```
