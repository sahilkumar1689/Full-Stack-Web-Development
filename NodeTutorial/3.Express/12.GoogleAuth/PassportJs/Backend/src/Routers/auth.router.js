const express = require("express");
const passport = require("../Config/passport"); // ← load the strategy here
const jwt = require("jsonwebtoken");
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Start Google auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/auth/failure' }),
  (req, res) => {
    const user = req.user;

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.redirect(`http://localhost:5173/oauthSuccess?token=${token}`);
  }
);


// Optional failure route
router.get('/failure', (req, res) => {
  res.redirect(`http://localhost:5173/authFail`);
  // return res.status(401).json({ message: 'Authentication failed',success:false });
});

module.exports = router;
