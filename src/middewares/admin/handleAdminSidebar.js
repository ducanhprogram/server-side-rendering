const sidebarItems = [
    {
        title: "Dashboard",
        icon: "fa-home",
        path: "/dashboard",
    },
    {
        title: "Categories",
        icon: "fa-tags",
        path: "/categories",
    },
    {
        title: "Products",
        icon: "fa-shopping-cart",
        path: "/products ",
    },
    {
        title: "Topics",
        icon: "fa-bookmark",
        path: "/topics ",
    },
    {
        title: "Posts",
        icon: "fa-file-alt",
        path: "/posts ",
    },
    {
        title: "Comments",
        path: "/comments",
        icon: "fa-comments",
    },

    {
        title: "Users",
        path: "/users",
        icon: "fa-user",
    },

    {
        title: "Analytics",
        path: "/analytics",
        icon: "fa-chart-bar",
    },

    {
        title: "Settings",
        path: "/settings",
        icon: "fa-cog",
    },
];

function handleSidebar(req, res, next) {
    res.locals.path = req.path;
    res.locals.sidebarItems = sidebarItems;

    next();
}

module.exports = handleSidebar;
