import { CiHospital1, CiMedicalCross, CiStethoscope } from "react-icons/ci"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"
import { MdSchool, MdOutlineLibraryBooks, MdPublic, MdOutlineLocalGasStation, MdOutlineFlag, MdVisibility } from 'react-icons/md'

const heroImage = [
    'hero (1).jpeg',
    'hero (2).jpeg',
    'hero (3).jpeg',
    'hero (4).jpeg',
    'hero (5).jpeg',
    'hero (6).jpeg',
    'hero (7).jpeg',
    'hero (8).jpeg',
    'hero (9).jpeg',
    'hero (10).jpeg',
]

const navItems = {
    row1: [{
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'academics',
            path: '/'
        },
        {
            name: 'research',
            path: '/'
        },
        {
            name: 'updates',
            path: '/'
        },
        {
            name: 'placement',
            path: '/'
        },
        {
            name: 'alumni',
            path: '/alumni'
        },
    ],
    row2: [{
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'programs',
            path: '/'
        },
        {
            name: 'research',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
        {
            name: 'events',
            path: '/'
        },
    ],
}

const footerLinks = {
    col1: [{
            name: 'home',
            path: '/'
        },
        {
            name: 'about us',
            path: '/'
        },
        {
            name: 'faculty',
            path: '/faculty'
        },
        {
            name: 'student',
            path: '/student'
        },
        {
            name: 'facilities',
            path: '/facility'
        },
    ],
    col2: [{
            name: 'Tamil Nadu Nurses and Midwives Council',
            path: '/document/Tamil Nadu Nurses and Midwives Council'
        },
        {
            name: 'Indian Nursing Council Recognition',
            path: '/document/Indian Nursing Council Recognition'
        },
        {
            name: 'Government Orders & Affiliations',
            path: '/document/Government Orders & Affiliations'
        },
        {
            name: 'alumni',
            path: '/'
        },
        {
            name: 'facilities',
            path: '/'
        },
    ]
}

const socialLinks = [{
        icon: FaInstagram,
        path: '/'
    },
    {
        icon: FaFacebook,
        path: '/'
    },
    {
        icon: FaYoutube,
        path: '/'
    },
    {
        icon: FaTwitter,
        path: '/'
    },
]

const facilties = [{
        subTitle: 'Class Room',
        title: 'Modern Classroom Experience',
        paraList: [
            'Our state-of-the-art classrooms are equipped with smart boards, high-speed internet, and collaborative learning tools to enhance student engagement and academic performance. Each classroom is designed to support active learning, combining traditional and digital teaching methods. These modern tools enable both teachers and students to communicate and interact seamlessly, making lessons more engaging and accessible.',
            'With ergonomic furniture, ambient lighting, and climate control, the classrooms provide a comfortable and conducive environment for focused learning. Our goal is to create a space where students feel inspired to think critically and creatively, ensuring their academic journey is smooth and efficient. The interactive classroom layout is designed to facilitate group discussions, making learning a dynamic and participatory process.'
        ],
        points: [{
                col1: [
                    'Smart boards and interactive displays.',
                    'High-speed Wi-Fi connectivity.',
                    'Audio-visual aids for enhanced teaching.',
                    'Cloud-based assignment submissions.'
                ]
            },
            {
                col2: [
                    'Ergonomic seating arrangements.',
                    'Real-time attendance monitoring.',
                    'Digital notes and resource access.',
                    'Seamless teacher-student collaboration.'
                ]
            }
        ],
        images: [
            '/class1.jpg',
            '/class2.jpg',
            '/class3.avif'
        ]
    },
    {
        subTitle: 'Knowledge Hub for Future Nurses',
        title: 'Library Facilities',
        paraList: [
            'The library at Syed Ammal School of Nursing is a vital academic resource that provides access to an extensive collection of nursing and allied health sciences books, journals, research papers, and digital content. It is designed to foster a deep learning environment for students and faculty. The library aims to promote academic excellence and independent research by offering comprehensive resources in both physical and digital formats.',
            'With a calm and organized atmosphere, the library offers dedicated reading spaces, computer terminals for online resources, and access to e-journals and databases. The collection is regularly updated to reflect the latest advancements in the healthcare and nursing fields. Additionally, the library features special sections for group studies, quiet individual study, and collaborative learning, ensuring that students can choose the most suitable environment for their learning preferences.'
        ],
        points: [{
                col1: [
                    'Extensive collection of nursing textbooks and reference materials.',
                    'Access to national and international journals.',
                    'Digital library with e-books and online resources.',
                    'Spacious reading areas with individual study zones.'
                ]
            },
            {
                col2: [
                    'Library management software for efficient cataloging.',
                    'Dedicated staff to assist students and faculty.',
                    'Wi-Fi enabled computer systems for academic use.',
                    'Open throughout the academic year with extended hours during exams.'
                ]
            }
        ],
        images: [
            '/lib1.jpg',
            '/lib2.jpg',
            '/lib3.jpg'
        ]
    },
    {
        subTitle: 'Reliable and Safe Transportation',
        title: 'Efficient Student Transport Services',
        paraList: [
            'Syed Ammal School of Nursing offers a well-organized and secure transport system that connects students and staff from surrounding towns and rural areas to the campus. The fleet consists of regularly maintained buses that ensure comfort, punctuality, and safety during transit. The transport system is designed to accommodate all academic and extracurricular needs, including hospital visits, community outreach, and clinical sessions.',
            'The transportation facility is designed to support hassle-free commuting for students attending clinical postings, community visits, and regular academic sessions. With experienced drivers and GPS-enabled tracking, the system ensures a smooth and reliable journey. In addition, our transport department ensures that buses run on time, offer a clean and comfortable ride, and provide an overall safe commuting experience for all students.'
        ],
        points: [{
                col1: [
                    'Fleet of well-maintained buses with scheduled routes.',
                    'Covers major locations across the district.',
                    'Trained and responsible driving staff.',
                    'Emergency support and backup vehicles available.'
                ]
            },
            {
                col2: [
                    'GPS-enabled tracking for safety and reliability.',
                    'Affordable transport fees for students.',
                    'Timely pick-up and drop services.',
                    'Transport support for hospital visits and fieldwork.'
                ]
            }
        ],
        images: [
            '/tra1.jpg',
            '/tra2.jpg',
            '/tra3.png'
        ]
    },
    {
        subTitle: 'Dedicated Outdoor Recreation Zone',
        title: 'Nurturing Health through Physical Activity',
        paraList: [
            'The playground at Syed Ammal School of Nursing promotes physical well-being and recreational development. It is well-maintained with open spaces for outdoor activities like volleyball, throwball, and group fitness sessions. Sports play a crucial role in balancing the rigorous academic schedule of nursing students, helping them to stay active, energized, and motivated throughout the day.',
            'By encouraging active participation in sports and fitness routines, the school ensures the mental and physical health of its students, fostering teamwork, discipline, and stress relief in a nurturing environment. The playground is also used for outdoor group activities and team-building exercises, helping students build strong interpersonal relationships and develop leadership skills.'
        ],
        images: [
            '/play1.jpg',
            '/play2.jpg',
            '/play3.jpg'
        ]
    },
    {
        subTitle: 'State-of-the-Art Auditorium',
        title: 'Empowering Minds through Interactive Spaces',
        paraList: [
            'The auditorium at Syed Ammal School of Nursing is a fully-equipped, spacious facility designed to host academic events, seminars, cultural programs, and guest lectures. With advanced audio-visual systems, comfortable seating, and modern acoustics, it provides an ideal environment for interactive learning and community engagement. The auditorium is designed to accommodate a large number of participants, offering a range of activities from educational talks to social events.',
            'It serves as a platform where students showcase their talents, participate in professional development activities, and engage in interdisciplinary knowledge sharing, fostering overall growth and communication skills. The auditorium hosts regular events, conferences, and workshops that enrich the academic experience of the students and encourage active participation from all members of the nursing community.'
        ],
        images: [
            '/audi1.jpg',
            '/audi2.jpg',
            '/audi3.jpg'
        ]
    },
    {
        subTitle: 'Knowledge Hub for Future Nurses',
        title: 'Laboratory Facilities',
        paraList: [
            'The library at Syed Ammal School of Nursing is a vital academic resource that provides access to an extensive collection of nursing and allied health sciences books, journals, research papers, and digital content. It is designed to foster a deep learning environment for students and faculty. The library offers a range of resources, including textbooks, scientific articles, digital archives, and multimedia content to support student research and academic progress.',
            'With a calm and organized atmosphere, the library offers dedicated reading spaces, computer terminals for online resources, and access to e-journals and databases. The collection is regularly updated to reflect the latest advancements in the healthcare and nursing fields. Additionally, the library offers personalized assistance for research projects and academic writing, making it a vital part of the students’ learning experience.'
        ],
        labs: [{
                image: '/lab1.jpg',
                name: 'Digital Resource Lab',
                description: 'Equipped with internet-enabled computers, this lab provides access to e-journals, research databases, and online reference materials essential for nursing studies.'
            },
            {
                image: '/lab2.webp',
                name: 'nutrition lab',
                description: 'A quiet space within the library dedicated to academic research, thesis preparation, and literature review, offering specialized nursing journals and academic guides.'
            },
            {
                image: '/lab3.webp',
                name: 'anatomy lab',
                description: 'A quiet space within the library dedicated to academic research, thesis preparation, and literature review, offering specialized nursing journals and academic guides.'
            }
        ],
        images: [
            '/hero (2).jpeg',
            '/hero (3).jpeg',
            '/hero (4).jpeg'
        ]
    }
];

const studentActivites = [{
    paraList: [
        "Student life at Syed Ammal School of Nursing extends far beyond the boundaries of classrooms and clinical rotations. Our institution firmly believes that education must nurture not just academic excellence, but also the personal growth and social consciousness of every individual. We encourage students to engage in a wide spectrum of extracurricular and co-curricular activities, from cultural festivities to professional development workshops. These engagements play a significant role in shaping our students into well-rounded professionals, who are confident, compassionate, and capable of thriving in the dynamic world of healthcare. Through these initiatives, we aim to instill vital qualities such as leadership, communication skills, and teamwork among our student community.",

        "Our students actively contribute to and participate in numerous outreach initiatives, awareness campaigns, and celebration of national and international observances. These activities provide an opportunity to apply their academic knowledge in real-world scenarios and develop an understanding of diverse social issues. The clubs and associations, ranging from health advocacy to environmental conservation, offer a vibrant platform for students to express their passions, collaborate with peers, and make meaningful contributions to society. Such experiences foster a deep sense of social responsibility, cultural appreciation, and empathy—core values that are indispensable in the field of nursing."
    ],
    activityList: [{
            name: 'Community Field Visit – Uthireshamangai',
            description: 'Students visited the rural community of Uthireshamangai to understand local health practices, challenges, and opportunities for improvement.',
            image: '/hero (4).jpeg',
            paraList: [
                "During this field visit, nursing students engaged with residents of Uthireshamangai to understand their lifestyle, health practices, and access to basic medical care. This hands-on experience helped students connect textbook learning with ground realities, allowing them to recognize gaps in public health awareness and services.",
                "The interaction with the local population enabled students to practice communication and health education skills. They shared information on personal hygiene, disease prevention, and nutrition. This visit also deepened their understanding of cultural factors that influence health behaviors and decision-making in rural communities."
            ],
            images: [
                '/hero (4).jpeg',
                '/hero (4).jpeg',
                '/hero (4).jpeg'
            ]
        },
        {
            name: 'Community Field Visit – Keelakarai',
            description: 'A comprehensive field visit aimed at exploring the health conditions, sanitation, and awareness levels in the coastal town of Keelakarai.',
            image: '/hero (5).jpeg',
            paraList: [
                "This visit provided students with the opportunity to assess coastal community health issues, including sanitation practices, drinking water sources, and nutrition. They engaged in discussions with residents, surveyed households, and observed healthcare delivery at the grassroots level.",
                "The Keelakarai visit was instrumental in helping students understand the challenges faced by underprivileged communities in accessing healthcare. It encouraged them to think critically about sustainable public health solutions and promoted a spirit of social responsibility among the future nurses."
            ],
            images: [
                '/hero (5).jpeg',
                '/hero (5).jpeg',
                '/hero (5).jpeg'
            ]
        },
        {
            name: 'Observation Visit – Water Purification, Pannapatti',
            description: 'An educational observation tour to the water purification facility in Pannapatti to study clean water supply systems and public health impacts.',
            image: '/hero (6).jpeg',
            paraList: [
                "Students observed the processes involved in purifying and distributing safe drinking water. They learned how untreated water sources are filtered and treated to meet health standards. The visit highlighted the link between safe water access and reduced incidence of waterborne diseases.",
                "This observational learning enhanced students' awareness of environmental health and public utilities. Understanding the mechanisms of water purification allowed them to appreciate the role of infrastructure in disease prevention, sanitation, and overall well-being in communities."
            ],
            images: [
                '/hero (6).jpeg',
                '/hero (6).jpeg',
                '/hero (6).jpeg'
            ]
        },
        {
            name: 'Sewage Management – Avaniyapuram Govt Hospital',
            description: 'A detailed visit to the sewage and sanitation system of Avaniyapuram Government Hospital to observe hygiene protocols and waste disposal mechanisms.',
            image: '/hero (7).jpeg',
            paraList: [
                "This hospital visit focused on the back-end operations of healthcare sanitation. Students examined how biomedical waste and sewage are handled, segregated, and processed, ensuring patient and staff safety. They also observed protocols for infectious waste disposal and hospital hygiene standards.",
                "By witnessing these procedures firsthand, students understood the critical role of sanitation in infection control. The visit emphasized how systematic waste management contributes to a safer healthcare environment, equipping them with knowledge to maintain hygiene in future clinical settings."
            ],
            images: [
                '/hero (7).jpeg',
                '/hero (7).jpeg',
                '/hero (7).jpeg'
            ]
        }
    ]

}];

const academicData = [{
    title: 'Programs Offered by Us',
    subTitle: 'Academics',
    description: 'We offer a range of academic programs designed to foster intellectual growth, practical skills, and holistic development. Our programs span multiple disciplines and prepare students to thrive in an ever-changing world.',
    pointBox: [{
            icon: CiHospital1,
            name: 'Diploma Programs',
            para: 'Short-term programs with hands-on practical learning.',
        },
        {
            icon: CiMedicalCross,
            name: 'Undergraduate Degrees',
            para: 'Comprehensive programs to build strong academic foundation.',
        },
    ],
}, ]

const whySectionData = [{
    title: 'Empowering Futures',
    subTitle: 'Why Choose Our Institution',
    description: 'We provide a student-centric learning environment backed by highly qualified faculty, modern infrastructure, and globally relevant curricula. Our commitment to academic excellence and innovation prepares students to lead and succeed worldwide.',
    pointList: [{
            icon: MdSchool,
            sub: 'Years of Excellence',
            name: 'Academic Legacy',
            value: 25,
        },
        {
            icon: MdOutlineLibraryBooks,
            sub: 'Courses Offered',
            name: 'Diverse Programs',
            value: 150,
        },
        {
            icon: MdPublic,
            sub: 'Global Partnerships',
            name: 'International Reach',
            value: 40,
        },
    ],
}, ]

const eventSectionData = [{
    title: 'Vibrant Campus Life',
    subTitle: 'Explore Our Events & Activities',
    description: 'Engaging events that inspire learning, creativity, collaboration, and community across all disciplines.',
}, ]

const blogSectionData = [{
    title: 'Insights & Ideas',
    subTitle: 'Explore Our Latest Blogs',
    description: 'Stay informed with thought-provoking articles, research highlights, campus updates, and inspiring stories from students and faculty. Our blog captures the essence of academic life and innovation shaping the future of education.',
}, ]

const antiRaggingData = [{
    title: 'Safe & Supportive Campus',
    subTitle: 'Our Commitment to Anti-Ragging',
    description: 'We uphold a strict zero-tolerance policy against ragging, ensuring a secure and welcoming environment for every student. Awareness programs, helplines, and active monitoring foster a culture of respect, dignity, and mutual trust.',
}, ]


const aboutData = [{
    aboutSection: {
        title: 'About Our Institution',
        subTitle: 'Empowering Future Healthcare Professionals',
        description: 'Our institution is committed to shaping compassionate, skilled, and competent healthcare professionals. With a focus on academic excellence, hands-on training, and strong ethical values, we prepare students to meet the evolving challenges of the healthcare industry. Recognized by national and state councils, we provide a supportive learning environment where students grow academically and personally. Our mission is to inspire lifelong learning, leadership, and service in the field of nursing, fostering a new generation of healthcare heroes ready to serve society with dedication and integrity.'
    },
    mission: {
        name: 'mission',
        icon: MdOutlineFlag,
        description: 'To educate and empower nursing students with ethical values, clinical competence, and leadership skills to deliver high-quality healthcare services and contribute positively to the well-being of society.'
    },
    vision: {
        name: 'vision',
        icon: MdVisibility,
        description: 'To become a center of excellence in nursing education and research, recognized nationally for developing compassionate, skilled, and innovative healthcare professionals.'
    },
    overview: {
        name: 'overview',
        icon: MdSchool,
        description: 'Syed Ammal Nursing College offers accredited nursing programs, combining academic rigor with practical training. We focus on holistic development, ensuring graduates are career-ready and socially responsible healthcare providers.'
    },
    documentationSection: {
        title: 'Affiliations & Regulatory Approvals',
        subTitle: 'Ensuring Quality Through Recognized Accreditations',
        paraList: [
            'Our institution is proudly affiliated with prestigious regulatory bodies such as the Tamil Nadu Nurses and Midwives Council (TNNMC), the Indian Nursing Council (INC), and is officially recognized by the Government through formal Government Orders (GO). These approvals are not just symbolic but serve as the foundation for our academic integrity and operational excellence. By aligning with these esteemed organizations, we ensure that our curriculum, faculty standards, and infrastructure strictly adhere to the norms and benchmarks laid out by both state and national regulatory frameworks. This guarantees that our students receive a world-class education that is both accredited and highly regarded by employers and higher education institutions across India and abroad.',

            'Affiliations with bodies like TNNMC and INC validate the authenticity and quality of our nursing programs, ensuring that they meet all academic, clinical, and ethical standards required in the field. The Government Order further reinforces our compliance with statutory requirements, giving parents and students complete peace of mind. These accreditations enable our graduates to be eligible for licensing, registration, and further education anywhere in India. More importantly, they signify our unwavering commitment to maintaining transparency, accountability, and academic excellence in every aspect of campus life. At our institution, quality assurance is not an afterthought—it’s the cornerstone of everything we do.'
        ],

        documentList: [{
                name: 'Tamil Nadu Nurses and Midwives Council',
                image: '/tnnc_logo.png'
            },
            {
                name: 'Indian Nursing Council Recognition',
                image: '/inc.png'
            },
            {
                name: 'Government Orders & Affiliations',
                image: '/go.png'
            },
        ]
    },
    principalSection: {
        message: "Welcome to Syed Ammal Nursing College, a place where compassion meets excellence in education. Our institution is committed to nurturing competent, ethical, and empathetic nursing professionals who can serve with integrity and dedication. We strive to provide a supportive learning environment enriched with clinical exposure, modern facilities, and a holistic curriculum. Our goal is to empower students to become not only skilled caregivers but also responsible citizens who contribute positively to society. Together, let us build a future rooted in knowledge, service, and humanity. I wish all our students a fulfilling and successful journey ahead."
    }
}]

const facultyData = [
    null
]

const documentData = [{
    'Tamil Nadu Nurses and Midwives Council': {
        image: '/tnnc_logo.png',

        name: 'Tamil Nadu Nurses and Midwives Council',
        description: 'Syed Ammal Nursing College is recognized by the Tamil Nadu Nurses and Midwives Council (TNNMC), ensuring adherence to state-level standards in nursing education.',
        paraList: [
            'The college maintains curriculum and training protocols as prescribed by TNNMC, fostering academic excellence and ethical practice.',
            'Through TNNMC affiliation, students are registered and certified to practice nursing within Tamil Nadu, with access to licensure and continuing education support.'
        ]
    },
    'Indian Nursing Council Recognition': {
        image: '/inc.png',
        name: 'Indian Nursing Council Recognition',
        description: 'Our programs are approved by the Indian Nursing Council (INC), New Delhi, which governs quality standards for nursing education across India.',
        paraList: [
            'INC approval ensures that the curriculum meets national benchmarks and our graduates are eligible for employment across the country.',
            'The college regularly updates academic policies in alignment with INC guidelines, ensuring relevance and compliance.'
        ]
    },
    'Government Orders & Affiliations': {
        image: '/go.png',
        name: 'Government Orders & Affiliations',
        description: 'Syed Ammal Nursing College is affiliated with a reputed university and adheres to all government regulations and orders related to nursing education.',
        paraList: [
            'All programs run under university affiliation, following the syllabus and examination patterns set by the higher education authority.',
            'We operate in compliance with Tamil Nadu Government orders, maintaining transparency, quality, and student welfare policies.'
        ]
    }
}];

const facilitySection = [{
    title: 'Campus Facilities',
    subTitle: 'Equipping Students with the Best Tools for Success',
    description: 'Our campus is designed to support an enriching educational journey. From modern classrooms and well-equipped laboratories to a digital library, simulation labs, and hygienic hostel accommodations, we ensure a holistic environment for learning and personal growth. Recreational areas, seminar halls, and a fully functional hospital for clinical training further enhance the academic experience. For a comprehensive overview of our facilities, visit our Facilities page.'
}];

const studentSection = [{
    title: 'Student Life & Activities',
    subTitle: 'Nurturing Professional Growth Beyond the Classroom',
    description: 'At our institution, student life extends far beyond academics. Through health awareness camps, field visits, cultural fests, and community outreach programs, students gain hands-on experience, build empathy, and develop leadership and communication skills. These activities cultivate a sense of responsibility, teamwork, and compassion—core values for every future healthcare professional. We believe in shaping well-rounded individuals who are ready to serve society with skill and heart.'
}];

export {
    navItems,
    footerLinks,
    socialLinks,
    heroImage,
    facilties,
    studentActivites,
    facultyData,
    academicData,
    aboutData,
    whySectionData,
    eventSectionData,
    blogSectionData,
    antiRaggingData,
    documentData,
    facilitySection,
    studentSection
}