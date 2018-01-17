const router = require('express').Router();
const passport = require('passport');
const usersController = require('../../controllers/usersController');

// Matches with "/api/user"
router
  .route('/users/login')
  .post(passport.authenticate('local'), function(req, res) {
    
    console.log(req.user);
    res.json(req.user);
  })
  .get(function(req, res) {
    console.log('hi', req.user);
    if (req.user) {
      res.json({username: req.user.username});
    } else {
      res.json(false);
    }
  });

router
  .route('/users/logout')
  .get(function(req,res) {
    req.logout()

    res.json(false);
  })

// Matches with "/api/user/:id"
router
  .route('/users/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route('/users/register').post(usersController.register);

module.exports = router;
