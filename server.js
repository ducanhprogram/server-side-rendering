require("module-alias/register");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const router = require("@/routes/api");
const adminRouter = require("@/routes/admin");

const handleNotFound = require("@/middewares/errors/handleNotFound");
const handleErrors = require("@/middewares/errors/handleErrors");
const responseEnhancer = require("@/middewares/responseEnhancer");
const handlePagination = require("@/middewares/handlePagination");
const handleAdminSidebar = require("@/middewares/admin/handleAdminSidebar");

const app = express();
const port = 3000;

//Middleware
app.use(express.static("public"));
app.use(cors());
//Đăng ký middleware
app.use(express.json()); // Middleware to parse JSON body
// để đọc req.body nếu là JSON
app.use(express.urlencoded());

app.use(handlePagination);
app.use(responseEnhancer);

//Thiết lập EJS làm công cụ tạo giao diện.
//Views
// Set Templating Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
//Chỉ định thư mục src/views chứa các file .ejs.
app.set("views", "./src/views");
app.set("layout", "admin/layouts/default/default");

//Routers
app.use("/api/v1", router); //Gắn tuyến đường
app.use("/admin", handleAdminSidebar, adminRouter); //Gắn tuyến đường

//Handle 404
app.use(handleNotFound);

//Handle errors
app.use(handleErrors);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
