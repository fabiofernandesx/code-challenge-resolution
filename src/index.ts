import app from './Infrastructure/Api';

const port = process.env.port || 2222;

app.listen(port, () => console.log(`Server running at ${port}`));
