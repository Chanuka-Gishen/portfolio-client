import HomeView from "./home/home-view";

// export const metadata = {
//   title: "Portfolio | Chanuka Gishen",
//   description:
//     "Experienced full-stack software engineer passionate about building scalable, user-centric applications with modern technologies across the entire stack from intuitive front-end interfaces to robust back-end systems.",
//   keywords: [
//     "Chanuka Mendis",
//     "Chanuka",
//     "Chanuka Gishen",
//     "Gishen",
//     "Gishen Mendis",
//     "Full-stack developer",
//     "Software Engineer",
//   ],
// };

export const metadata = {
  title: "Portfolio | Chanuka Gishen",
  description:
    "Portfolio of Chanuka Gishen, a full-stack software engineer specializing in building scalable, user-focused web and mobile applications with modern technologies such as React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Chanuka Gishen",
    "Chanuka Mendis",
    "Full-stack developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN stack",
    "Web Developer",
    "Mobile App Developer",
    "Software Portfolio",
  ],
  authors: [{ name: "Chanuka Gishen" }],
  creator: "Chanuka Gishen",
  publisher: "Chanuka Gishen",
  metadataBase: new URL("https://www.chanukagishen.com"),
  openGraph: {
    title: "Portfolio | Chanuka Gishen",
    description:
      "Discover the projects and expertise of Chanuka Gishen, a full-stack developer building intuitive front-end interfaces and robust back-end systems.",
    url: "https://www.chanukagishen.com",
    siteName: "Chanuka Gishen Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.chanukagishen.com/images/background/profile-og.png",
        width: 1200,
        height: 630,
        alt: "Chanuka Gishen Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.chanukagishen.com",
  },
};

export default HomeView;
