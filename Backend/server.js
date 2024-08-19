const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Martinez2003!',
    database: 'patientzero'

});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});


app.post('/api/forum_posts', (req, res) => {
    const { post_content } = req.body;
    const query = 'INSERT INTO forum_posts (post_content) VALUES (?)';
    db.query(query, [post_content], (err, results) => {
        if (err) {
            console.error('Error inserting post:', err);
            return res.status(500).json({ error: 'Failed to add post'});
        }
        res.status(201).json({ id: results.insertId, post_content });
    });
});;

app.get('/api/forum_posts', (req, res) => {
    const query = 'SELECT * FROM forum_posts ORDER BY timestamp DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts:', err);
            return res.status(500).json({ error: 'Failed to fetch posts' });
        }
        res.json(results);
    });
});

app.put('/api/forum_posts/:id', (req, res) => {
    const { id } = req.params;
    const { post_content } = req.body;
    const query = 'UPDATE forum_posts SET post_content = ? WHERE id = ?';
    db.query(query, [post_content, id], (err) => {
        if (err) {
            console.error('Error updating post:', err);
            return res.status(500).json({ error: 'Failed to update post' });
        }
        res.status(200).json({ id, post_content });
    });
});

app.delete('/api/forum_posts/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM forum_posts WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting post:', err);
            return res.status(500).json({ error: 'Failed to delete post' });
        }
        res.status(204).send();
    });
});

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
