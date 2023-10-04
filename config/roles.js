const allRoles = {
    user: ['getUsers', 'getPosts', 'getCategories'],
    admin: ['getUsers', 'manageUsers', 'getPosts', 'managePosts', 'getCategories', 'manageCaagories'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
};
