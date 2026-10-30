const express = require("express");
const path = require("path");
const app = express();



// EJS ayarları
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Statik dosyalar
app.use("/libs", express.static("node_modules"));
app.use("/static", express.static("public"));
app.use('/video', express.static(path.join(__dirname, 'public/video')));

// Router'ları çağır
const userRoutes = require("./routes/user");       // Kullanıcı rotaları
const adminRoutes = require("./routes/admin");     // Admin rotaları
const coursesRoutes = require("./routes/courses"); // Courses rotaları

// Sıra ÖNEMLİ — önce admin
app.use("/admin", adminRoutes);

// Sıra ÖNEMLİ — önce courses
app.use("/courses", coursesRoutes);

// Normal kullanıcı rotaları
app.use("/", userRoutes);

// Server başlat
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
