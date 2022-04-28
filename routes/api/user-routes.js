const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//api get all
router
.route('/')
.get(getAllUsers)
.post(createUser);

// api get one
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// friends
router.route('/:userID/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;
    
