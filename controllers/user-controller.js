const { User } = require('./models');

const userController = {
  getAllUsers: (req, res) => {
    User.find({})
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};

getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

createUser = (req, res) => {
  User.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

addFriend = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $push: { friends: req.body } }, { new: true })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

deleteFriend = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.body } }, { new: true })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

module.exports = userController;