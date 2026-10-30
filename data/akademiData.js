// Tüm site verileri burada — MySQL gerekmez

const courses = [
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
];

function pickCourses(ids) {
    return ids.map((id) => {
        const course = courses.find((c) => c.id === id);
        return {
            baslik: course.baslik,
            aciklama: course.aciklama,
            img: course.img,
            link: course.link
        };
    });
}

const categories = [
    {
        baslik: "Web Geliştirme",
        aciklama: "HTML, CSS, JavaScript ve modern web teknolojileri ile profesyonel siteler geliştirin.",
        img: "web.jpg",
        link: "/admin/web"
    },
    {
        baslik: "Mobil Geliştirme",
        aciklama: "React Native, Flutter ve Kotlin ile iOS ve Android uygulamaları oluşturun.",
        img: "mobil.png",
        link: "/admin/mobil"
    },
    {
        baslik: "Siber Güvenlik",
        aciklama: "Sızma testleri, güvenlik analizi ve savunma tekniklerini öğrenin.",
        img: "siber.jpg",
        link: "/admin/siber"
    },
    {
        baslik: "Veri Bilimi",
        aciklama: "Veri analizi, görselleştirme ve istatistiksel modelleme becerileri kazanın.",
        img: "veri.webp",
        link: "/admin/veri"
    },
    {
        baslik: "Yapay Zeka",
        aciklama: "Makine öğrenmesi, derin öğrenme ve AI tabanlı uygulamalar geliştirin.",
        img: "yapay.webp",
        link: "/admin/yapay"
    },
    {
        baslik: "Bulut Bilişim",
        aciklama: "AWS, Azure ve Google Cloud ile ölçeklenebilir bulut çözümleri tasarlayın.",
        img: "bulut.jpg",
        link: "/admin/bulut"
    },
    {
        baslik: "Siber Savunma",
        aciklama: "Saldırı tespiti, olay müdahalesi ve güvenlik operasyonlarını öğrenin.",
        img: "savunma.jpg",
        link: "/admin/savunma"
    }
];

const bulutKurslari = [
    {
        baslik: "AWS Temelleri",
        aciklama: "Amazon Web Services ile bulut altyapısı kurmayı ve yönetmeyi öğrenin.",
        img: "bulut.jpg",
        link: "/courses/kurslar"
    },
    {
        baslik: "Microsoft Azure",
        aciklama: "Azure servisleri ile kurumsal bulut uygulamaları geliştirin.",
        img: "bulut.jpg",
        link: "/courses/kurslar"
    },
    {
        baslik: "Google Cloud Platform",
        aciklama: "GCP araçları ile veri ve uygulama barındırma çözümleri oluşturun.",
        img: "bulut.jpg",
        link: "/courses/kurslar"
    }
];

module.exports = {
    courses,
    categories,
    web: pickCourses([1, 2, 3, 4, 5]),
    mobil: pickCourses([6, 7, 8]),
    siber: pickCourses([9, 10, 11]),
    veri: pickCourses([12, 13, 14]),
    yapay: pickCourses([15]),
    savunma: pickCourses([9, 10, 11]),
    bulut: bulutKurslari
};
