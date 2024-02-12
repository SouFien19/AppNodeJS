const express = require("express")
const path = require('path'); // Import path module

const router = express.Router()

// Sample data for /post/all
const posts = [
    { id: 1, name: 'soyfien', lastname: 'labiadh' },
    { id: 2, name: 'ghaith', lastname: 'labiadh' },
  ];
  
// Route for /post/all
router.get('/all', (req, res) => {
    // Return the array of posts as JSON
    res.json(posts);
  });
  
  // Route for /post/:id
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
  
    if (post) {
      res.json(post);
    } else {
      res.status(404).send('Post not found');
    }
  });
  

  module.exports = router