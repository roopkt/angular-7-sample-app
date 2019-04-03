const  express  = require('express');
const port = process.env.PORT || 3000;
const publicWeb = process.env.PUBLICWEB || './dist';

const app = express();

app.use(express.static(publicWeb));
console.log(`serving from ${publicWeb}`);

app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicWeb });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
