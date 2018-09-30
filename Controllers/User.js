const express = require("express");
const Sequelize = require("sequelize");
const { User, books } = require("../Models");

const router = express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, {
      include: [
        {
          model: books
        }
      ]
      
    }).then(user => res.json({ user }));
  });

router.patch("/", (req,res) => {
  const patch = {},
  const update = req.body;

  if(update.username !== undefined){
    patch.username = update.username
  }

  if(update.password !== undefined){
    patch.password = update.password
  }

  if(update.about !== undefined){
    patch.about = update.about
  }

  User.update(patch,{
    where: req.user.id
  })

})

module.exports = router;