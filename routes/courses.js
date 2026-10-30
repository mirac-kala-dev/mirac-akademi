const express = require("express");
const router = express.Router();

const data = {
    courses: [
        {
            id: 1,
            baslik: "HTML & CSS",
            aciklama: "Web sayfalarının yapısını ve tasarımını oluşturmak için temel teknolojiler.",
            img: "html.webp",
            link: "/courses/html-css",
            video: "/video/html-css.mp4",
            modules: ["HTML Temelleri", "HTML Etiketleri", "CSS Temelleri", "CSS Box Model", "Responsive Tasarım"]
        },
        {
            id: 2,
            baslik: "JavaScript",
            aciklama: "Dinamik web sayfaları ve frontend geliştirme için temel dil.",
            img: "javascript.png",
            link: "/courses/javascript",
            modules: ["Değişkenler ve Veri Tipleri", "Fonksiyonlar", "DOM Manipülasyonu", "Events", "Async JavaScript"]
        },
        {
            id: 3,
            baslik: "TypeScript",
            aciklama: "JavaScript'in tip güvenli versiyonu, büyük web projelerinde tercih edilir.",
            img: "ts.png",
            link: "/courses/typescript",
            modules: ["TypeScript Giriş", "Tipler ve Arayüzler", "Sınıflar", "Generics", "Proje Uygulaması"]
        },
        {
            id: 4,
            baslik: "Java",
            aciklama: "Kurumsal uygulamalar ve Android geliştirme için yaygın olarak kullanılır.",
            img: "java.webp",
            link: "/courses/java",
            modules: ["Java Temelleri", "Nesne Yönelimli Programlama", "Collections", "Exception Handling", "Proje"]
        },
        {
            id: 5,
            baslik: "Node.js",
            aciklama: "Backend geliştirme ve sunucu tarafı uygulamalar için popüler bir platform.",
            img: "nodejs.jpg",
            link: "/courses/nodejs",
            modules: ["Node.js Giriş", "Express.js", "REST API", "Veritabanı Bağlantısı", "Authentication"]
        },
        {
            id: 6,
            baslik: "React Native",
            aciklama: "Hem iOS hem Android için modern mobil uygulamalar geliştirmeyi sağlar.",
            img: "react.png",
            link: "/courses/react-native",
            modules: ["React Native Kurulum", "Bileşenler", "Navigation", "State Yönetimi", "Mobil Proje"]
        },
        {
            id: 7,
            baslik: "Flutter",
            aciklama: "Google tarafından geliştirilen çapraz platform mobil uygulama framework'ü.",
            img: "flutter.jpg",
            link: "/courses/flutter",
            modules: ["Dart Temelleri", "Widget Yapısı", "Layout", "State Management", "Flutter Proje"]
        },
        {
            id: 8,
            baslik: "Kotlin",
            aciklama: "Android uygulama geliştirme için modern ve güçlü bir dil.",
            img: "kotlin.jpg",
            link: "/courses/kotlin",
            modules: ["Kotlin Temelleri", "Android Studio", "UI Bileşenleri", "Activity & Fragment", "Android Proje"]
        },
        {
            id: 9,
            baslik: "Python",
            aciklama: "Sızma testleri, otomasyon ve güvenlik araçları geliştirmek için kullanılır.",
            img: "python.png",
            link: "/courses/python",
            modules: ["Python Temelleri", "Script Yazımı", "Network Güvenliği", "Otomasyon", "Pentest Araçları"]
        },
        {
            id: 10,
            baslik: "C",
            aciklama: "Düşük seviye sistem programlama ve exploit geliştirme için temel dil.",
            img: "C.jpg",
            link: "/courses/c",
            modules: ["C Temelleri", "Pointer'lar", "Bellek Yönetimi", "Sistem Programlama", "Güvenlik Uygulamaları"]
        },
        {
            id: 11,
            baslik: "JavaScript (Pentest)",
            aciklama: "Web tabanlı güvenlik testlerinde ve script geliştirmede kullanılır.",
            img: "javascript.png",
            link: "/courses/javascript-pentest",
            modules: ["XSS Saldırıları", "CSRF", "DOM Tabanlı Güvenlik", "Browser Exploitation", "Güvenli Kod"]
        },
        {
            id: 12,
            baslik: "R",
            aciklama: "İstatistik ve veri analizi için popüler bir programlama dili.",
            img: "R.webp",
            link: "/courses/r",
            modules: ["R Temelleri", "Veri Manipülasyonu", "Görselleştirme", "İstatistiksel Analiz", "R Projesi"]
        },
        {
            id: 13,
            baslik: "Python (Data Science)",
            aciklama: "Veri analizi, görselleştirme ve makine öğrenmesi için kullanılır.",
            img: "python.png",
            link: "/courses/python-data",
            modules: ["NumPy", "Pandas", "Matplotlib", "Veri Temizleme", "Makine Öğrenmesi Giriş"]
        },
        {
            id: 14,
            baslik: "SQL",
            aciklama: "Veritabanı yönetimi ve veri sorgulama için temel dil.",
            img: "sql.png",
            link: "/courses/sql",
            modules: ["SQL Temelleri", "JOIN İşlemleri", "Aggregate Fonksiyonlar", "Subquery", "Veritabanı Tasarımı"]
        },
        {
            id: 15,
            baslik: "TensorFlow",
            aciklama: "Derin öğrenme ve yapay zekâ projeleri geliştirmek için bir kütüphane.",
            img: "tensorFlow.png",
            link: "/courses/tensorflow",
            modules: ["TensorFlow Kurulum", "Tensörler", "Sinir Ağları", "Model Eğitimi", "Derin Öğrenme Projesi"]
        },
        {
            id: 16,
            baslik: "C#",
            aciklama: "Windows uygulamaları, oyun ve web geliştirme için güçlü bir dil.",
            img: "c.webp",
            link: "/courses/csharp",
            modules: ["C# Temelleri", "Nesne Yönelimli Programlama", "LINQ", "ASP.NET", "C# Projesi"]
        }
    ]
};

router.get("/kurslar", (req, res) => {
    res.render("courses/kurslar", data);
});

data.courses.forEach((course) => {
    const slug = course.link.replace("/courses/", "");
    router.get(`/${slug}`, (req, res) => {
        res.render("courses/course-detail", { course, courses: data.courses });
    });
});

module.exports = router;
