// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create web server
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

// Get all comments
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create new comment
app.post('/posts/:id/comments', (req, res) => {
  // Generate random ID for comment
  const commentId = randomBytes(4).toString('hex');

  // Get comment content from request body
  const { content } = req.body;

  // Get comments for the post
  const comments = commentsByPostId[req.params.id] || [];

  // Add new comment to array
  comments.push({ id: commentId, content });

  // Store comments
  commentsByPostId[req.params.id] = comments;

  // Send response
  res.status(201).send(comments);
});

// Start server
app.listen(4001, () => {
  console.log('Listening on 4001');
});