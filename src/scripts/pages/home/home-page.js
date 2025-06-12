import { isLoggedIn, getUser, clearAuth } from "../../utils/auth-utils.js";

export default class HomePage {
    async render() {
        const userLoggedIn = isLoggedIn();
        const userData = getUser();

        const articles = [
            {
                id: 1,
                category: "anger",
                categoryLabel: "Anger",
                categoryColor: "red",
                title: "Why You're Angry All the Time (And What to Do About It)",
                source: "Psychology Today",
                description:
                    "Artikel dari Psychology Today ini membahas penyebab kemarahan kronis dan strategi efektif untuk mengelolanya dalam kehidupan sehari-hari.",
                date: "2022",
                image: "https://picsum.photos/seed/anger1/400/300",
                link: "https://www.psychologytoday.com/us/articles/why-youre-angry-all-the-time",
            },
            {
                id: 2,
                category: "anger",
                categoryLabel: "Anger",
                categoryColor: "red",
                title: "Managing Anger in the Post-Pandemic World",
                source: "VeryWellMind",
                description:
                    "VeryWellMind membahas bagaimana pandemi telah mempengaruhi tingkat kemarahan kolektif dan cara-cara baru untuk mengelolanya di era pasca-pandemi.",
                date: "2023",
                image: "https://picsum.photos/seed/anger2/400/300",
                link: "https://www.verywellmind.com/anger-in-the-pandemic-era-5094215",
            },
            {
                id: 3,
                category: "anger",
                categoryLabel: "Anger",
                categoryColor: "red",
                title: "What Science Says About Anger Management Today",
                source: "Mindful.org",
                description:
                    "Mindful.org menyajikan penelitian terbaru tentang manajemen kemarahan dan pendekatan berbasis mindfulness untuk mengatasi emosi yang intens.",
                date: "2023",
                image: "https://picsum.photos/seed/anger3/400/300",
                link: "https://www.mindful.org/what-science-says-about-anger-management/",
            },
            {
                id: 4,
                category: "anger",
                categoryLabel: "Anger",
                categoryColor: "red",
                title: "Healthy Ways to Express Anger",
                source: "Mayo Clinic Blog",
                description:
                    "Mayo Clinic Blog memberikan panduan praktis tentang cara-cara sehat untuk mengekspresikan kemarahan tanpa merusak hubungan atau kesehatan mental.",
                date: "2024",
                image: "https://picsum.photos/seed/anger4/400/300",
                link: "https://www.mayoclinic.org/anger-expression-tips",
            },
            {
                id: 5,
                category: "anger",
                categoryLabel: "Anger",
                categoryColor: "red",
                title: "Anger at Work: The New Stressor?",
                source: "Harvard Business Review",
                description:
                    "Harvard Business Review menganalisis bagaimana kemarahan di tempat kerja menjadi stressor utama dan strategi untuk mengelolanya secara profesional.",
                date: "2022",
                image: "https://picsum.photos/seed/anger5/400/300",
                link: "https://hbr.org/2022/10/how-to-handle-anger-at-work",
            },
            // Artikel Fear
            {
                id: 6,
                category: "fear",
                categoryLabel: "Fear",
                categoryColor: "purple",
                title: "How to Work With Fear Today",
                source: "Mindful.org",
                description:
                    "Mindful.org menyajikan panduan praktis untuk mengenali, menerima, dan bekerja dengan rasa takut dalam konteks dunia modern.",
                date: "2024",
                image: "https://picsum.photos/seed/fear1/400/300",
                link: "https://www.mindful.org/how-to-deal-with-fear-now/",
            },
            {
                id: 7,
                category: "fear",
                categoryLabel: "Fear",
                categoryColor: "purple",
                title: "The Role of Mindfulness in Overcoming Fear",
                source: "VeryWellMind",
                description:
                    "VeryWellMind mengeksplorasi bagaimana praktik mindfulness dapat membantu mengatasi ketakutan dan kecemasan kronis.",
                date: "2023",
                image: "https://picsum.photos/seed/fear2/400/300",
                link: "https://www.verywellmind.com/mindfulness-and-fear-6500432",
            },
            {
                id: 8,
                category: "fear",
                categoryLabel: "Fear",
                categoryColor: "purple",
                title: "Facing Modern Fear: From Social Anxiety to AI Panic",
                source: "Psychology Today",
                description:
                    "Psychology Today membahas spektrum ketakutan modern, mulai dari kecemasan sosial hingga ketakutan terhadap teknologi AI yang berkembang.",
                date: "2023",
                image: "https://picsum.photos/seed/fear3/400/300",
                link: "https://www.psychologytoday.com/us/blog/facing-modern-fears",
            },
            {
                id: 9,
                category: "fear",
                categoryLabel: "Fear",
                categoryColor: "purple",
                title: "Fear and Digital Overload: What to Do About It",
                source: "Harvard Health",
                description:
                    "Harvard Health menganalisis hubungan antara kecemasan, ketakutan, dan kelebihan informasi digital, serta menawarkan solusi praktis.",
                date: "2022",
                image: "https://picsum.photos/seed/fear4/400/300",
                link: "https://www.health.harvard.edu/blog/fear-digital-age",
            },
            {
                id: 10,
                category: "fear",
                categoryLabel: "Fear",
                categoryColor: "purple",
                title: "Is Fear Always Bad? Neuroscientific Insights",
                source: "Scientific American",
                description:
                    "Scientific American menyajikan temuan neurosains terbaru tentang peran adaptif rasa takut dan bagaimana memanfaatkannya secara positif.",
                date: "2024",
                image: "https://picsum.photos/seed/fear5/400/300",
                link: "https://www.scientificamerican.com/fear-and-brain-2024",
            },
            // Artikel Sadness
            {
                id: 11,
                category: "sadness",
                categoryLabel: "Sadness",
                categoryColor: "blue",
                title: "Understanding the Purpose of Sadness",
                source: "Psychology Today",
                description:
                    "Psychology Today mengeksplorasi fungsi evolusioner kesedihan dan bagaimana emosi ini dapat membantu kita memproses pengalaman hidup.",
                date: "2023",
                image: "https://picsum.photos/seed/sadness1/400/300",
                link: "#",
            },
            {
                id: 12,
                category: "sadness",
                categoryLabel: "Sadness",
                categoryColor: "blue",
                title: "When Sadness Becomes Depression: Recognizing the Signs",
                source: "Mayo Clinic",
                description:
                    "Mayo Clinic membahas perbedaan antara kesedihan normal dan depresi klinis, serta kapan harus mencari bantuan profesional.",
                date: "2024",
                image: "https://picsum.photos/seed/sadness2/400/300",
                link: "#",
            },
            {
                id: 13,
                category: "sadness",
                categoryLabel: "Sadness",
                categoryColor: "blue",
                title: "Embracing Sadness: The Mindful Approach",
                source: "Mindful.org",
                description:
                    "Mindful.org menawarkan pendekatan berbasis mindfulness untuk menghadapi dan menerima kesedihan sebagai bagian dari pengalaman manusia.",
                date: "2023",
                image: "https://picsum.photos/seed/sadness3/400/300",
                link: "#",
            },
            {
                id: 14,
                category: "sadness",
                categoryLabel: "Sadness",
                categoryColor: "blue",
                title: "Cultural Differences in Expressing Sadness",
                source: "Harvard Review",
                description:
                    "Harvard Review menganalisis bagaimana berbagai budaya memahami, mengekspresikan, dan mengatasi kesedihan dengan cara yang berbeda.",
                date: "2022",
                image: "https://picsum.photos/seed/sadness4/400/300",
                link: "#",
            },
            // Artikel Suicidal
            {
                id: 15,
                category: "suicidal",
                categoryLabel: "Suicidal",
                categoryColor: "yellow",
                title: "Recognizing Warning Signs: A Guide for Friends and Family",
                source: "American Foundation for Suicide Prevention",
                description:
                    "American Foundation for Suicide Prevention menyajikan panduan komprehensif untuk mengenali tanda-tanda peringatan pikiran bunuh diri.",
                date: "2024",
                image: "https://picsum.photos/seed/suicidal1/400/300",
                link: "#",
            },
            {
                id: 16,
                category: "suicidal",
                categoryLabel: "Suicidal",
                categoryColor: "yellow",
                title: "Effective Interventions for Suicidal Thoughts",
                source: "National Institute of Mental Health",
                description:
                    "National Institute of Mental Health membahas intervensi berbasis bukti untuk mengatasi pikiran bunuh diri dan mencegah krisis.",
                date: "2023",
                image: "https://picsum.photos/seed/suicidal2/400/300",
                link: "#",
            },
            {
                id: 17,
                category: "suicidal",
                categoryLabel: "Suicidal",
                categoryColor: "yellow",
                title: "Building Hope: Recovery Stories from Survivors",
                source: "Suicide Prevention Lifeline",
                description:
                    "Kumpulan kisah inspiratif dari para penyintas yang berhasil mengatasi pikiran bunuh diri dan membangun kembali kehidupan yang bermakna.",
                date: "2023",
                image: "https://picsum.photos/seed/suicidal3/400/300",
                link: "#",
            },
        ];

        // **PERBAIKAN UNTUK WARNA DINAMIS TAILWIND**
        const categoryColorMap = {
            red: "text-red-600 bg-red-100",
            purple: "text-purple-600 bg-purple-100",
            blue: "text-blue-600 bg-blue-100",
            yellow: "text-yellow-600 bg-yellow-100",
        };

        // Fungsi untuk membuat kartu artikel
        const renderArticleCard = (article) => {
            return `
                <div class="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]" data-category="${article.category
                }">
                    <div class="h-48 overflow-hidden">
                        <img src="${article.image}" alt="${article.title
                }" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-5">
                        <span class="text-xs font-semibold px-2 py-1 rounded-full ${categoryColorMap[article.categoryColor] ||
                "text-gray-600 bg-gray-100"
                }">
                            ${article.categoryLabel}
                        </span>
                        <h3 class="font-bold text-lg mt-2">${article.title}</h3>
                        <p class="text-gray-600 text-sm mt-2 line-clamp-3">${article.description
                }</p>
                        <div class="mt-4 flex justify-between items-center">
                            <span class="text-xs text-gray-500">${article.date
                }</span>
                            <a href="${article.link
                }" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-blue-600 hover:text-blue-800">Baca selengkapnya</a>
                        </div>
                    </div>
                </div>
            `;
        };

        return `
            <div class="flex flex-col">
                <div class="sticky top-0 z-50 bg-white border-b border-gray-200">
                    <div class="px-4 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div class="w-full md:w-auto flex justify-between items-center">
                            <img src="/images/Wrapper.png" alt="Logo" class="h-10" />
                            <button id="mobile-menu-button" class="md:hidden text-gray-700">
                                <i class="fas fa-bars text-xl"></i>
                            </button>
                        </div>
                        <nav class="w-full md:w-auto hidden md:block" id="mobile-menu">
                            <ul class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 font-medium">
                                <li class="w-full md:w-auto text-center"><a href="#" class="block py-2 text-gray-700 hover:text-blue-700 transition">Pustaka Edukasi</a></li>
                                <li class="w-full md:w-auto text-center"><a href="#/catatan-emosi" class="block py-2 text-gray-700 hover:text-blue-700 transition">Catatan Emosi</a></li>
                                <li class="w-full md:w-auto text-center"><a href="#/chat" class="block py-2 text-gray-700 hover:text-blue-700 transition">Curhat Sekarang</a></li>
                            </ul>
                        </nav>
                        <div class="w-full md:w-auto md:block">
                            ${userLoggedIn
                ? `
                                <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                                    <span class="text-gray-700 font-medium text-center">Halo, ${userData?.name ||
                userData?.email?.split("@")[0] ||
                "Pengguna"
                }</span>
                                    <button id="btn-logout" type="button" class="w-full md:w-auto text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button>
                                </div>`
                : `
                                <a href="#/login" class="block w-full md:w-auto text-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">Login</a>`
            }
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row items-center justify-between pl-4 md:pl-8 lg:pl-20 py-10 md:py-20 gap-10">
                    <div class="flex flex-col w-full lg:w-1/2 space-y-6">
                        <h1 class="font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug">
                            Saat Inovasi Bertemu Empati: Bentuk Baru Dukungan Kesehatan Mental
                            <span class="text-blue-600 font-bold block mt-2">Powered by AI</span>
                        </h1>
                        <p class="text-base md:text-lg lg:text-xl text-gray-700">
                            Website kesehatan mental berbasis AI yang mendampingi generasi muda mengenali, memahami, dan menangani kondisi emosional secara aman dan personal.
                        </p>
                    </div>
                    <div class="w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[410px] flex justify-center">
                        <img src="/images/background-hero.png" alt="Background Hero" class="h-full w-full object-cover rounded-xl" />
                    </div>
                </div>

                <div class="w-full flex justify-center items-center py-10 px-4">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 md:gap-20">
                        ${Array(8)
                .fill(0)
                .map(
                    (_, i) =>
                        `<div class="h-[60px] sm:h-[80px] md:h-[100px]"><img src="/images/${(i % 3) + 4
                        }.png" alt="" class="w-full h-full object-contain" /></div>`
                )
                .join("")}
                    </div>
                </div>

                <div class="flex flex-col items-center px-4 py-10 text-lg md:text-[20px] font-semibold bg-[#F2F2F2] mx-4 md:mx-10 lg:mx-20">
                    <h2 class="text-center mb-5">Masih Bingung Tentang MyCare?</h2>
                    <div class="flex flex-col lg:flex-row w-full gap-10 items-start justify-center">
                        <div class="w-full lg:w-1/2 flex justify-center">
                            <img src="/images/background-faq.png" alt="FAQ Image" class="w-full object-contain max-w-sm"/>
                        </div>
                        <div class="w-full lg:w-1/2 space-y-4" id="accordion">
                            <div class="border border-gray-200 rounded-lg overflow-hidden">
                                <button type="button" class="accordion-button flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-white hover:bg-gray-100">
                                    <span>Apa itu MyCare?</span>
                                    <i class="fas fa-chevron-down transition-transform"></i>
                                </button>
                                <div class="accordion-content hidden p-4 bg-white text-gray-700 text-[16px] leading-relaxed">MyCare adalah sebuah platform digital inovatif yang dirancang untuk menjadi teman Anda dalam perjalanan kesehatan mental.
                        Kami memanfaatkan kekuatan kecerdasan buatan (AI) untuk menyediakan ruang yang aman, suportif, dan personal bagi siapa saja yang ingin memahami dan mengelola kondisi emosional mereka.
                        Fitur utama kami meliputi chatbot AI yang empatik, pustaka edukasi, dan fitur catatan emosi untuk membantu Anda mengenali pola perasaan.</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg overflow-hidden">
                                <button type="button" class="accordion-button flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-white hover:bg-gray-100">
                                    <span>Apa itu Healthcare dalam konteks ini?</span>
                                    <i class="fas fa-chevron-down transition-transform"></i>
                                </button>
                                <div class="accordion-content hidden p-4 bg-white text-gray-700 text-[16px] leading-relaxed">Healthcare, atau layanan kesehatan, tidak hanya terbatas pada kesehatan fisik. Kesehatan mental adalah bagian fundamental dari kesejahteraan Anda secara keseluruhan.
                                Di MyCare, kami memahami 'healthcare' sebagai sebuah pendekatan holistik.
                                Platform kami berfungsi sebagai alat pendukung di ranah kesehatan mental, membantu Anda membangun kesadaran diri dan ketahanan emosional.</div>
                            </div>
                            <div class="border border-gray-200 rounded-lg overflow-hidden">
                                <button type="button" class="accordion-button flex items-center justify-between w-full p-4 font-medium text-left text-gray-900 bg-white hover:bg-gray-100">
                                    <span>Bagaimana cara menggunakannya?</span>
                                    <i class="fas fa-chevron-down transition-transform"></i>
                                </button>
                                <div class="accordion-content hidden p-4 bg-white text-gray-700 text-[16px] leading-relaxed">
                                    <ol class="list-decimal list-inside space-y-2">
                                        <li><strong>Mulai Curhat:</strong> Klik tombol 'Curhat Sekarang' untuk memulai percakapan dengan asisten AI kami. Ceritakan apa saja yang Anda rasakan, chatbot kami dirancang untuk mendengarkan tanpa menghakimi.</li>
                                        <li><strong>Jelajahi Pustaka Edukasi:</strong> Kunjungi bagian Pustaka untuk membaca artikel terpercaya mengenai berbagai topik emosi seperti kecemasan, kesedihan, dan cara mengelola amarah.</li>
                                        <li><strong>Gunakan Catatan Emosi:</strong> Manfaatkan fitur Catatan Emosi untuk melacak suasana hati Anda dari hari ke hari. Fitur ini membantu Anda mengenali pola dan pemicu emosi Anda seiring waktu.</li>
                                        <li><strong>Dapatkan Rekomendasi:</strong> Semakin sering Anda berinteraksi, MyCare akan semakin memahami Anda dan dapat memberikan rekomendasi yang lebih personal dan relevan.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-10 md:mt-20 px-4 md:px-10 lg:px-20 pb-10 md:pb-20">
                    <div class="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-4 mb-8 md:mb-12">
                        <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl">Dirancang Sepenuhnya untuk Kecerdasan Emosional.</h1>
                        <span class="text-sm md:text-base lg:text-lg font-semibold text-gray-700">myCare menghadirkan infrastruktur AI paling canggih untuk kesehatan emosional.</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="p-6 shadow-lg bg-white rounded-lg border border-gray-200 space-y-4 transition hover:shadow-xl hover:-translate-y-1">
                            <div class="flex items-center justify-between"><h2 class="text-xl font-semibold">Percakapan Empatik</h2><i class="text-blue-500 text-2xl fas fa-comments"></i></div>
                            <p class="text-gray-600 text-base">Bicaralah dengan asisten AI kami yang dilatih untuk memahami nuansa emosi dan memberikan respons yang suportif, kapan pun Anda butuhkan.</p>
                        </div>
                        <div class="p-6 shadow-lg bg-white rounded-lg border border-gray-200 space-y-4 transition hover:shadow-xl hover:-translate-y-1">
                            <div class="flex items-center justify-between"><h2 class="text-xl font-semibold">Analisis Mood & Insight</h2><i class="text-green-500 text-2xl fas fa-chart-line"></i></div>
                            <p class="text-gray-600 text-base">Lacak perjalanan emosional Anda. AI kami membantu Anda mengenali pola, memahami pemicu, dan memberikan wawasan berharga untuk kesadaran diri.</p>
                        </div>
                        <div class="p-6 shadow-lg bg-white rounded-lg border border-gray-200 space-y-4 transition hover:shadow-xl hover:-translate-y-1">
                            <div class="flex items-center justify-between"><h2 class="text-xl font-semibold">Rekomendasi Personal</h2><i class="text-yellow-500 text-2xl fas fa-lightbulb"></i></div>
                            <p class="text-gray-600 text-base">Berdasarkan suasana hati, MyCare secara cerdas merekomendasikan konten yang relevan—mulai dari artikel, musik, hingga meditasi.</p>
                        </div>
                        <div class="p-6 shadow-lg bg-white rounded-lg border border-gray-200 space-y-4 transition hover:shadow-xl hover:-translate-y-1">
                            <div class="flex items-center justify-between"><h2 class="text-xl font-semibold">Privasi & Keamanan</h2><i class="text-red-500 text-2xl fas fa-shield-alt"></i></div>
                            <p class="text-gray-600 text-base">Cerita Anda aman bersama kami. Kami menerapkan standar keamanan dan privasi yang tinggi untuk memastikan semua data Anda bersifat rahasia.</p>
                        </div>
                    </div>
                </div>

                <div class="mt-10 md:mt-20 px-4 md:px-10 lg:px-20 pb-10 md:pb-20">
                    <div class="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-4 mb-8 md:mb-12">
                        <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl">Kemampuan kami</h1>
                        <span class="text-sm md:text-base lg:text-lg font-semibold text-gray-700">Nikmati berbagai kemampuan AI dari myCare.</span>
                    </div>
                    <div class="h-auto sm:h-[400px] md:h-[500px] lg:h-[541px] bg-[#E4E4E7] rounded-xl px-4 sm:pl-8 py-6">
                        <div class="flex flex-col sm:flex-row items-center justify-between h-full gap-4">
                            <div class="flex flex-col items-start w-full sm:max-w-[300px] space-y-3 md:space-y-4 text-center sm:text-left">
                                <h1 class="text-xl md:text-2xl font-bold">Memahami Emosi Lewat Percakapan</h1>
                                <span class="text-gray-700 text-xs sm:text-sm leading-relaxed">MyCare menggunakan teknologi AI canggih untuk memahami konteks dan perasaan di balik cerita Anda. Ini memungkinkan kami memberikan dukungan yang relevan dan membantu Anda merasa benar-benar didengar.</span>
                            </div>
                            <div class="w-full sm:w-[300px] md:w-[400px] lg:w-[541px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[519px]">
                                <img src="/images/capabilities.png" alt="AI Capability" class="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 px-6 md:px-20">
                     <div class="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-4 mb-12">
                         <h1 class="font-bold text-3xl md:text-4xl">Bagaimana kami bisa membantu?</h1>
                         <span class="text-base md:text-lg font-semibold text-gray-700">Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan.</span>
                     </div>
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                         <div class="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex items-start space-x-4">
                            <div class="bg-blue-100 text-blue-600 p-3 rounded-full mt-1"><i class="fas fa-life-ring text-2xl"></i></div>
                             <div>
                                 <h3 class="font-bold text-lg">Dukungan Pengguna</h3>
                                 <p class="text-gray-600 mt-1">Punya pertanyaan, masukan, atau butuh bantuan terkait aplikasi? Tim kami siap membantu Anda.</p>
                                 <a href="mailto:dukungan@mycare.ai" class="text-blue-600 font-medium mt-2 inline-block">dukungan@mycare.ai</a>
                             </div>
                         </div>
                         <div class="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex items-start space-x-4">
                            <div class="bg-green-100 text-green-600 p-3 rounded-full mt-1"><i class="fas fa-handshake text-2xl"></i></div>
                             <div>
                                 <h3 class="font-bold text-lg">Kerja Sama & Media</h3>
                                 <p class="text-gray-600 mt-1">Tertarik untuk berkolaborasi, menjadi partner, atau ingin meliput MyCare? Hubungi tim partnership kami.</p>
                                 <a href="mailto:partnership@mycare.ai" class="text-green-600 font-medium mt-2 inline-block">partnership@mycare.ai</a>
                             </div>
                         </div>
                     </div>
                     <div class="flex justify-center">
                         <a href="#/contact" class="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">Hubungi Kami Sekarang</a>
                     </div>
                 </div>

                <div class="mt-10 md:mt-16 px-4 md:px-10 lg:px-20 pb-10 md:pb-16">
                    <div class="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-4 mb-8">
                        <h1 class="font-bold text-2xl md:text-3xl lg:text-4xl">Pustaka Edukasi</h1>
                        <span class="text-sm md:text-base lg:text-lg font-semibold text-gray-700">Temukan berbagai artikel informatif tentang kesehatan mental</span>
                    </div>
                    <div class="flex justify-center mb-6 md:mb-8 overflow-x-auto">
                        <div class="inline-flex p-1 bg-gray-100 rounded-full flex-nowrap whitespace-nowrap">
                            <button class="tab-button px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full bg-blue-600 text-white" data-tab="semua">Semua</button>
                            <button class="tab-button px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full text-gray-700 hover:bg-gray-200" data-tab="anger">Anger</button>
                            <button class="tab-button px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full text-gray-700 hover:bg-gray-200" data-tab="fear">Fear</button>
                            <button class="tab-button px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full text-gray-700 hover:bg-gray-200" data-tab="sadness">Sadness</button>
                            <button class="tab-button px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-medium rounded-full text-gray-700 hover:bg-gray-200" data-tab="suicidal">Suicidal</button>
                        </div>
                    </div>
                    <div id="articles-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        ${articles
                .map((article) => renderArticleCard(article))
                .join("")}
                    </div>
                    <div class="flex justify-center mt-6 md:mt-8">
                        <button class="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition text-sm md:text-base">Lihat Lebih Banyak</button>
                    </div>
                </div>
                <footer class="bg-blue-700 text-white py-10 md:py-16">
                    <div class="container mx-auto px-6 md:px-20">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                            <div class="space-y-4">
                                <img src="/images/Wrapper.png" alt="MyCare Logo" class="h-10 bg-white p-1 rounded">
                                <p class="text-gray-300 text-sm">Teman digital untuk kesehatan mental, menyediakan ruang aman untuk berbagi dan bertumbuh dengan bantuan AI.</p>
                                <div class="flex space-x-4"><a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-facebook-f"></i></a><a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-twitter"></i></a><a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-instagram"></i></a></div>
                            </div>
                            <div>
                                <h4 class="font-bold text-white mb-4">Navigasi</h4>
                                <ul class="space-y-2">
                                    <li><a href="#" class="text-gray-300 hover:text-white transition">Beranda</a></li>
                                    <li><a href="#/articles" class="text-gray-300 hover:text-white transition">Pustaka</a></li>
                                    <li><a href="#/chat" class="text-gray-300 hover:text-white transition">Curhat Sekarang</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-white mb-4">Sumber Daya</h4>
                                <ul class="space-y-2">
                                    <li><a href="#/articles" class="text-gray-300 hover:text-white transition">Artikel Kemarahan</a></li>
                                    <li><a href="#/articles" class="text-gray-300 hover:text-white transition">Artikel Kecemasan</a></li>
                                    <li><a href="#/articles" class="text-gray-300 hover:text-white transition">Bantuan Darurat</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-white mb-4">Dukungan</h4>
                                <ul class="space-y-2">
                                    <li><a href="#/faq" class="text-gray-300 hover:text-white transition">FAQ</a></li>
                                    <li><a href="#/privacy" class="text-gray-300 hover:text-white transition">Kebijakan Privasi</a></li>
                                    <li><a href="#/terms" class="text-gray-300 hover:text-white transition">Syarat & Ketentuan</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-10 pt-8 border-t border-blue-600 text-center text-sm text-gray-300">
                            © 2025 MyCare AI. Dibuat dengan ❤️ oleh Tim CF025 - CC011.
                        </div>
                    </div>
                </footer>
            </div>
        `;
    }

    async afterRender() {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
                mobileMenu.classList.toggle("flex");
                mobileMenu.classList.toggle("flex-col");
            });
        }

        const logoutButton = document.getElementById("btn-logout");
        if (logoutButton) {
            logoutButton.addEventListener("click", async () => {
                try {
                    clearAuth();
                    document.dispatchEvent(new Event("authChanged"));
                    window.location.reload();
                } catch (error) {
                    console.error("Error during logout:", error);
                }
            });
        }

        const accordionButtons = document.querySelectorAll(".accordion-button");
        accordionButtons.forEach((button) => {
            button.onclick = null;
            button.addEventListener("click", function () {
                // Tutup semua accordion terlebih dahulu
                accordionButtons.forEach((otherButton) => {
                    if (otherButton !== this) {
                        const otherContent = otherButton.nextElementSibling;
                        const otherIcon =
                            otherButton.querySelector(".fa-chevron-down");
                        otherContent.classList.add("hidden");
                        otherIcon.classList.remove("rotate-180");
                    }
                });

                // Buka atau tutup accordion yang diklik
                const content = this.nextElementSibling;
                const icon = this.querySelector(".fa-chevron-down");
                content.classList.toggle("hidden");
                icon.classList.toggle("rotate-180");
            });
        });

        // Article filtering
        const filterArticles = (category) => {
            const articlesContainer =
                document.getElementById("articles-container");
            if (!articlesContainer) return;
            const articles =
                articlesContainer.querySelectorAll("[data-category]");
            articles.forEach((article) => {
                if (
                    category === "semua" ||
                    article.dataset.category === category
                ) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        };

        const tabButtons = document.querySelectorAll(".tab-button");
        tabButtons.forEach((button) => {
            button.addEventListener("click", function () {
                tabButtons.forEach((btn) => {
                    btn.classList.remove("bg-blue-600", "text-white");
                    btn.classList.add("text-gray-700", "hover:bg-gray-200");
                });
                this.classList.add("bg-blue-600", "text-white");
                this.classList.remove("text-gray-700", "hover:bg-gray-200");
                const category = this.getAttribute("data-tab");
                filterArticles(category);
            });
        });

        // Tampilkan semua artikel saat pertama kali load
        filterArticles("semua");
    }
}