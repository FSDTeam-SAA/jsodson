/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card,  CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { 
//   BookOpen, 
//   GraduationCap, 
//   FileText, 
//   Mic2, 
//   CheckCircle2, 
//   XCircle,
//   RefreshCcw 
// } from "lucide-react";

// // --- Data Section ---
// const videoLessons = [
//   {
//     id: "1",
//     title: "Lesson 1: Introduction",
//     description: "Basics of Consumer Society",
//     url: "https://www.youtube.com/embed/3MwMII8n1qM?si=4RiC_0l8pm4qoYe8",
//     materials: "#",
//     podcast: "https://open.spotify.com/embed/episode/..."
//   },
//   {
//     id: "2",
//     title: "Lesson 2: Economic Growth",
//     description: "Wealth Creation & Innovation",
//     url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add Actual Link
//     materials: "#",
//     podcast: "https://open.spotify.com/embed/episode/..."
//   },
//   {
//     id: "3",
//     title: "Lesson 3: Social Impact",
//     description: "Progress & Ecological Damage",
//     url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Add Actual Link
//     materials: "#",
//     podcast: "https://open.spotify.com/embed/episode/..."
//   },
// ];

// const flashcards = [
//   { word: "Consumer society", definition: "A social and economic order that encourages the acquisition of goods and services in ever-increasing amounts as a primary cultural value." },
//   { word: "Wealth creation", definition: "The process of generating assets, income, or value through investment, innovation, and production to increase the overall net worth of individuals or entities." },
//   { word: "Social progress", definition: "The capacity of a society to meet the basic human needs of its citizens, enhance their quality of life, and create the conditions for all individuals to reach their full potential." },
//   { word: "Customer loyalty", definition: "The ongoing emotional relationship between a consumer and a brand, manifested by the customer's willingness to engage with and purchase from the business repeatedly." },
//   { word: "Reliable earnings", definition: "A consistent and predictable stream of income or profit that remains stable over a specific period, often used to assess the financial health of an organization." },
//   { word: "Ecological damage", definition: "The physical, chemical, or biological degradation of the environment caused by human activities, resulting in the loss of biodiversity or ecosystem services." },
//   { word: "Institutional structures", definition: "The formal systems of rules, roles, and relationships, such as laws and government bodies, that organize social, political, and economic interaction." },
//   { word: "Media literacy", definition: "The ability to access, analyze, evaluate, and create media in a variety of forms, allowing individuals to understand the role of media in society." },
//   { word: "Conceptualisation", definition: "The process of forming an idea or abstraction by identifying the essential characteristics of a phenomenon or object." },
//   { word: "Persuasive techniques", definition: "Specific strategies or methods used in communication to influence an audience's beliefs, attitudes, or behaviors." },
//   { word: "Target audience", definition: "The specific group of people identified as the intended recipients of a message, advertisement, or product based on shared characteristics." },
//   { word: "Point of view", definition: "The specific perspective, position, or vantage point from which a story is told or an argument is presented." },
//   { word: "Empirical research", definition: "A way of gaining knowledge by means of direct or indirect observation and experience, rather than through theory or belief alone." },
//   { word: "Vulnerability", definition: "The state of being exposed to the possibility of being attacked or harmed, either physically, emotionally, or socio-economically." },
//   { word: "Counter-arguments", definition: "Reasons or evidence put forward to oppose or refute a specific idea, claim, or previous argument." },
//   { word: "Skepticism", definition: "An attitude of doubt or a disposition toward suspended judgment, typically requiring evidence before accepting a claim as true." },
//   { word: "Advertiser tactics", definition: "The specific creative and psychological maneuvers used by marketers to capture attention and motivate consumers to purchase a product." },
//   { word: "Discerning consumers", definition: "Individuals who exhibit good judgment and critical thinking when selecting products, focusing on quality and value rather than superficial appeal." },
//   { word: "Persuasive device", definition: "A specific linguistic or rhetorical tool, such as a metaphor or appeal to emotion, used to convince an audience of a particular point." },
//   { word: "Critical analysis", definition: "The objective evaluation of an issue or text in order to form a judgment by examining its component parts and underlying assumptions." }
// ];

// // --- Interactive Quiz Component ---
// const VocabQuiz = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userInput, setUserInput] = useState("");
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
//   const [score, setScore] = useState(0);

//   const checkAnswer = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (userInput.toLowerCase().trim() === flashcards[currentIndex].word.toLowerCase().trim()) {
//       setIsCorrect(true);
//       setScore(score + 1);
//     } else {
//       setIsCorrect(false);
//     }
//   };

//   const nextQuestion = () => {
//     setIsCorrect(null);
//     setUserInput("");
//     setCurrentIndex((prev) => (prev + 1) % flashcards.length);
//   };

//   return (
//     <Card className="max-w-3xl mx-auto shadow-xl border-none bg-white overflow-hidden rounded-3xl">
//       <div className="bg-primary p-6 text-white flex justify-between items-center">
//         <h3 className="text-xl font-bold flex items-center gap-2">
//           <BookOpen className="w-5 h-5" /> Vocab Challenge
//         </h3>
//         <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//           Score: {score}
//         </span>
//       </div>
//       <CardContent className="p-8">
//         <div className="mb-8">
//           <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">Meaning:</span>
//           <p className="text-xl font-medium text-slate-800 mt-2 leading-relaxed">
//             {flashcards[currentIndex].definition}
//           </p>
//         </div>

//         <form onSubmit={checkAnswer} className="space-y-4">
//           <div className="relative">
//             <Input 
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Type the correct word/phrase here..."
//               className="h-14 text-lg border-2 focus:ring-primary rounded-xl"
//               disabled={isCorrect !== null}
//             />
//             {isCorrect === true && <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-6 h-6" />}
//             {isCorrect === false && <XCircle className="absolute right-4 top-4 text-red-500 w-6 h-6" />}
//           </div>

//           <AnimatePresence>
//             {isCorrect === false && (
//               <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 font-medium">
//                 Incorrect. The correct word is: <span className="font-bold underline">{flashcards[currentIndex].word}</span>
//               </motion.p>
//             )}
//           </AnimatePresence>

//           <div className="flex gap-3">
//             {isCorrect === null ? (
//               <Button type="submit" className="w-full h-12 text-lg font-bold bg-slate-900 hover:bg-slate-800">
//                 Check Answer
//               </Button>
//             ) : (
//               <Button onClick={nextQuestion} className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90">
//                 Next Word <RefreshCcw className="ml-2 w-4 h-4" />
//               </Button>
//             )}
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// // --- Main Study Module ---
// export default function StudyModule() {
//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-16 px-4 md:px-8">
//       <div className="mx-auto container">
        
//         {/* HEADER */}
//         <header className="mb-12 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
//             <GraduationCap className="w-4 h-4" />
//             <span>STUDENT HUB</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
//             Learning <span className="text-primary">Materials</span>
//           </h1>
//         </header>

//         {/* SECTION 1: VIDEO & RESOURCES */}
//         <section className="mb-24">
//           <Tabs defaultValue="1" className="w-full flex flex-col">
//             <div className="flex flex-col items-center mb-8">
//               <TabsList className="bg-white border p-1.5 rounded-full shadow-sm flex gap-1 h-auto">
//                 {videoLessons.map((vid) => (
//                   <TabsTrigger
//                     key={vid.id}
//                     value={vid.id}
//                     className="px-6 py-2.5 rounded-full text-sm font-bold transition-all data-[state=active]:bg-primary data-[state=active]:text-white shadow-none"
//                   >
//                     Lesson {vid.id}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </div>

//             {videoLessons.map((vid) => (
//               <TabsContent key={vid.id} value={vid.id}>
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                   {/* Video Player (Main Content) */}
//                   <div className="lg:col-span-2">
//                     <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
//                       <div className="aspect-video w-full bg-slate-900">
//                         <iframe
//                           className="w-full h-full"
//                           src={vid.url}
//                           title={vid.title}
//                           allowFullScreen
//                         ></iframe>
//                       </div>
//                       <div className="p-6 bg-white flex justify-between items-center">
//                         <div>
//                           <h2 className="text-2xl font-bold">{vid.title}</h2>
//                           <p className="text-slate-500">{vid.description}</p>
//                         </div>
//                         <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
//                            <a href={vid.materials} target="_blank"><FileText className="mr-2 w-4 h-4"/> Get Materials</a>
//                         </Button>
//                       </div>
//                     </Card>
//                   </div>

//                   {/* Sidebar: Podcast & Extras */}
//                   <div className="space-y-6">
//                     <Card className="rounded-3xl border-none shadow-lg bg-slate-900 text-white p-6">
//                       <div className="flex items-center gap-3 mb-4">
//                         <Mic2 className="text-primary w-6 h-6" />
//                         <h3 className="text-lg font-bold">Lesson Podcast</h3>
//                       </div>
//                       <p className="text-slate-400 text-sm mb-4">Listen to the summary of this lesson on the go.</p>
//                       <div className="bg-slate-800 h-32 rounded-xl flex items-center justify-center border border-slate-700">
//                          {/* Replace with real Spotify/Audio embed */}
//                          <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Podcast Embed Area</span>
//                       </div>
//                     </Card>
//                   </div>
//                 </div>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </section>

//         {/* SECTION 2: INTEGRATED QUIZ */}
//         <section className="py-12 bg-slate-100/50 rounded-[3rem] px-4">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-black text-slate-900">Interactive Vocabulary Quiz</h2>
//             <p className="text-slate-500">Read the definition and type the correct terminology.</p>
//           </div>
//           <VocabQuiz />
//         </section>

//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   BookOpen,
//   GraduationCap,
//   FileText,
//   Mic2,
//   CheckCircle2,
//   XCircle,
// } from "lucide-react";

// // -------------------- VIDEO DATA --------------------

// const videoLessons = [
//   {
//     id: "1",
//     title: "Lesson 1: Introduction",
//     description: "Basics of Consumer Society",
//     url: "https://www.youtube.com/embed/3MwMII8n1qM?si=4RiC_0l8pm4qoYe8",
//     materials: "#",
//     podcast: "https://open.spotify.com/embed/episode/...",
//   },
//   {
//     id: "2",
//     title: "Lesson 2: Economic Growth",
//     description: "Wealth Creation & Innovation",
//     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     materials: "#",
//     podcast: "https://open.spotify.com/embed/episode/...",
//   },
//   {
//     id: "3",
//     title: "Lesson 3: Social Impact",
//     description: "Progress & Ecological Damage",
//     url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     materials: "#",
//     podcast: "https://open.spotify.com/embed/episode/...",
//   },
// ];

// // -------------------- FLASHCARD DATA --------------------

// const flashcards = [
//   { word: "Consumer society", definition: "A social and economic order that encourages the acquisition of goods and services in ever-increasing amounts as a primary cultural value." },
//   { word: "Wealth creation", definition: "The process of generating assets, income, or value through investment, innovation, and production to increase the overall net worth of individuals or entities." },
//   { word: "Social progress", definition: "The capacity of a society to meet the basic human needs of its citizens, enhance their quality of life, and create the conditions for all individuals to reach their full potential." },
//   { word: "Customer loyalty", definition: "The ongoing emotional relationship between a consumer and a brand, manifested by the customer's willingness to engage with and purchase from the business repeatedly." },
//   { word: "Reliable earnings", definition: "A consistent and predictable stream of income or profit that remains stable over a specific period, often used to assess the financial health of an organization." },
//   { word: "Ecological damage", definition: "The physical, chemical, or biological degradation of the environment caused by human activities, resulting in the loss of biodiversity or ecosystem services." },
//   { word: "Institutional structures", definition: "The formal systems of rules, roles, and relationships, such as laws and government bodies, that organize social, political, and economic interaction." },
//   { word: "Media literacy", definition: "The ability to access, analyze, evaluate, and create media in a variety of forms, allowing individuals to understand the role of media in society." },
//   { word: "Conceptualisation", definition: "The process of forming an idea or abstraction by identifying the essential characteristics of a phenomenon or object." },
//   { word: "Persuasive techniques", definition: "Specific strategies or methods used in communication to influence an audience's beliefs, attitudes, or behaviors." },
//   { word: "Target audience", definition: "The specific group of people identified as the intended recipients of a message, advertisement, or product based on shared characteristics." },
//   { word: "Point of view", definition: "The specific perspective, position, or vantage point from which a story is told or an argument is presented." },
//   { word: "Empirical research", definition: "A way of gaining knowledge by means of direct or indirect observation and experience, rather than through theory or belief alone." },
//   { word: "Vulnerability", definition: "The state of being exposed to the possibility of being attacked or harmed, either physically, emotionally, or socio-economically." },
//   { word: "Counter-arguments", definition: "Reasons or evidence put forward to oppose or refute a specific idea, claim, or previous argument." },
//   { word: "Skepticism", definition: "An attitude of doubt or a disposition toward suspended judgment, typically requiring evidence before accepting a claim as true." },
//   { word: "Advertiser tactics", definition: "The specific creative and psychological maneuvers used by marketers to capture attention and motivate consumers to purchase a product." },
//   { word: "Discerning consumers", definition: "Individuals who exhibit good judgment and critical thinking when selecting products, focusing on quality and value rather than superficial appeal." },
//   { word: "Persuasive device", definition: "A specific linguistic or rhetorical tool, such as a metaphor or appeal to emotion, used to convince an audience of a particular point." },
//   { word: "Critical analysis", definition: "The objective evaluation of an issue or text in order to form a judgment by examining its component parts and underlying assumptions." }
// ];
// // -------------------- VOCAB QUIZ --------------------

// const VocabQuiz = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userInput, setUserInput] = useState("");
//   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
//   const [score, setScore] = useState(0);

//   const checkAnswer = (e: React.FormEvent) => {
//     e.preventDefault();

//     const correctWord = flashcards[currentIndex].word
//       .toLowerCase()
//       .trim();

//     const answer = userInput.toLowerCase().trim();

//     if (answer === correctWord) {
//       setIsCorrect(true);
//       setScore((prev) => prev + 1);

//       // auto next question after 1s
//       setTimeout(() => {
//         nextQuestion();
//       }, 1000);

//     } else {
//       setIsCorrect(false);
//     }
//   };

//   const nextQuestion = () => {
//     setCurrentIndex((prev) => (prev + 1) % flashcards.length);
//     setUserInput("");
//     setIsCorrect(null);
//   };

//   return (
//     <Card className="max-w-3xl mx-auto shadow-xl border-none bg-white overflow-hidden rounded-3xl">
//       <div className="bg-primary p-6 text-white flex justify-between items-center">
//         <h3 className="text-xl font-bold flex items-center gap-2">
//           <BookOpen className="w-5 h-5" /> Vocab Challenge
//         </h3>

//         <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
//           Score: {score}
//         </span>
//       </div>

//       <CardContent className="p-8">
//         <div className="mb-8">
//           <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">
//             Meaning:
//           </span>

//           <p className="text-xl font-medium text-slate-800 mt-2 leading-relaxed">
//             {flashcards[currentIndex].definition}
//           </p>
//         </div>

//         <form onSubmit={checkAnswer} className="space-y-4">
//           <div className="relative">
//             <Input
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Type the correct word/phrase here..."
//               className="h-14 text-lg border-2 rounded-xl"
//             />

//             {isCorrect === true && (
//               <CheckCircle2 className="absolute right-4 top-4 text-green-500 w-6 h-6" />
//             )}

//             {isCorrect === false && (
//               <XCircle className="absolute right-4 top-4 text-red-500 w-6 h-6" />
//             )}
//           </div>

//       <AnimatePresence>
//   {isCorrect === false && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="text-red-500 font-medium"
//     >
//       Incorrect.

//       <div className="mt-1 text-sm text-slate-700">
//         Correct answer:
//         <span className="font-bold underline ml-2 text-primary">
//           {flashcards[currentIndex].word}
//         </span>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//           <div className="flex gap-3">
//             {/* CHECK BUTTON */}

//             <Button
//               type="submit"
//               className="w-1/2 h-12 text-lg font-bold text-white bg-[#1B2A6B] hover:bg-[#1B2A6B]/80"
//             >
//               Check
//             </Button>

//             {/* NEXT QUESTION */}

//             <Button
//               type="button"
//               onClick={nextQuestion}
//               variant="outline"
//               className="w-1/2 h-12 text-lg font-bold"
//             >
//               Next Question
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// // -------------------- MAIN PAGE --------------------

// export default function StudyModule() {
//   return (
//     <div className="min-h-screen bg-[#f8fafc] py-16 px-4 md:px-8">
//       <div className="mx-auto container">
//         {/* HEADER */}

//         <header className="mb-12 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
//             <GraduationCap className="w-4 h-4" />
//             <span>STUDENT HUB</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
//             Learning <span className="text-primary">Materials</span>
//           </h1>
//         </header>

//         {/* VIDEO SECTION */}

//         <section className="mb-24">
//           <Tabs defaultValue="1" className="w-full flex flex-col">
//             <div className="flex flex-col items-center mb-8">
//               <TabsList className="bg-white border p-1.5 rounded-full shadow-sm flex gap-1 h-auto">
//                 {videoLessons.map((vid) => (
//                   <TabsTrigger
//                     key={vid.id}
//                     value={vid.id}
//                     className="px-6 py-2.5 rounded-full text-slate-900 text-sm font-bold transition-all data-[state=active]:bg-primary data-[state=active]:text-black"
//                   >
//                     Lesson {vid.id}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </div>

//             {videoLessons.map((vid) => (
//               <TabsContent key={vid.id} value={vid.id}>
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                   {/* VIDEO */}

//                   <div className="lg:col-span-2">
//                     <Card className="overflow-hidden border-none shadow-2xl rounded-3xl">
//                       <div className="aspect-video w-full bg-slate-900">
//                         <iframe
//                           className="w-full h-full"
//                           src={vid.url}
//                           title={vid.title}
//                           allowFullScreen
//                         />
//                       </div>

//                       <div className="p-6 bg-white flex justify-between items-center">
//                         <div>
//                           <h2 className="text-2xl font-bold">{vid.title}</h2>
//                           <p className="text-slate-500">
//                             {vid.description}
//                           </p>
//                         </div>

//                         <Button
//                           asChild
//                           variant="outline"
//                           className="rounded-full border-primary text-primary"
//                         >
//                           <a href={vid.materials} target="_blank">
//                             <FileText className="mr-2 w-4 h-4" />
//                             Get Materials
//                           </a>
//                         </Button>
//                       </div>
//                     </Card>
//                   </div>

//                   {/* PODCAST */}

//                   <div className="space-y-6">
//                     <Card className="rounded-3xl border-none shadow-lg bg-slate-900 text-white p-6">
//                       <div className="flex items-center gap-3 mb-4">
//                         <Mic2 className="text-primary w-6 h-6" />
//                         <h3 className="text-lg font-bold">
//                           Lesson Podcast
//                         </h3>
//                       </div>

//                       <p className="text-slate-400 text-sm mb-4">
//                         Listen to the summary of this lesson on the go.
//                       </p>

//                       <div className="bg-slate-800 h-32 rounded-xl flex items-center justify-center border border-slate-700">
//                         <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">
//                           Podcast Embed Area
//                         </span>
//                       </div>
//                     </Card>
//                   </div>
//                 </div>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </section>

//         {/* QUIZ SECTION */}

//         <section className="py-12 bg-slate-100/50 rounded-[3rem] px-4">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-black text-slate-900">
//               Interactive Vocabulary Quiz
//             </h2>

//             <p className="text-slate-500">
//               Read the definition and type the correct terminology.
//             </p>
//           </div>

//           <VocabQuiz />
//         </section>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Mic2,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Headphones,
} from "lucide-react";

// -------------------- HELPERS --------------------

const getYoutubeEmbedUrl = (url: string) => {
  if (!url) return "";

  if (url.includes("/embed/")) return url;

  try {
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get("v");
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch (error) {
    return url;
  }

  return url;
};

const getSpotifyEmbedUrl = (url: string) => {
  if (!url) return "";

  if (url.includes("/embed/")) return url;

  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);
    const episodeIndex = parts.findIndex((part) => part === "episode");
    const episodeId = episodeIndex !== -1 ? parts[episodeIndex + 1] : null;

    if (episodeId) {
      return `https://open.spotify.com/embed/episode/${episodeId}`;
    }
  } catch ( error) {
    return url;
  }

  return url;
};

// -------------------- LESSON DATA --------------------

type PodcastItem = {
  title: string;
  duration?: string;
  url: string;
};

type LessonItem = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  materials: string;
  podcasts: PodcastItem[];
};

const videoLessons: LessonItem[] = [
  {
    id: "1",
    title: "Lesson 1: Introduction",
    description: "Basics of Consumer Society",
    videoUrl: "",
    materials: "#",
    podcasts: [],
  },
  {
    id: "2",
    title: "Lesson 2: Consumer Society & Advertising",
    description: "Video, materials, podcasts, and vocabulary support",
    videoUrl: "https://www.youtube.com/watch?v=3MwMII8n1qM",
    materials: "https://www.youtube.com/watch?v=3MwMII8n1qM",
    podcasts: [
      {
        title: "Luke's English",
        duration: "60 mins",
        url: "https://open.spotify.com/episode/4BpMNqQiOeObQncI5ltf2I",
      },
      {
        title: "DOAC",
        duration: "8 mins",
        url: "https://open.spotify.com/episode/64SHD7z0LGfTADb6eZsloB",
      },
    ],
  },
  {
    id: "3",
    title: "Lesson 3: Social Impact",
    description: "Add lesson 3 links when client sends the final resources",
    videoUrl: "",
    materials: "#",
    podcasts: [],
  },
];

// -------------------- FLASHCARD DATA --------------------

const flashcards = [
  { word: "Consumer society", definition: "A social and economic order that encourages the acquisition of goods and services in ever-increasing amounts as a primary cultural value." },
  { word: "Wealth creation", definition: "The process of generating assets, income, or value through investment, innovation, and production to increase the overall net worth of individuals or entities." },
  { word: "Social progress", definition: "The capacity of a society to meet the basic human needs of its citizens, enhance their quality of life, and create the conditions for all individuals to reach their full potential." },
  { word: "Customer loyalty", definition: "The ongoing emotional relationship between a consumer and a brand, manifested by the customer's willingness to engage with and purchase from the business repeatedly." },
  { word: "Reliable earnings", definition: "A consistent and predictable stream of income or profit that remains stable over a specific period, often used to assess the financial health of an organization." },
  { word: "Ecological damage", definition: "The physical, chemical, or biological degradation of the environment caused by human activities, resulting in the loss of biodiversity or ecosystem services." },
  { word: "Institutional structures", definition: "The formal systems of rules, roles, and relationships, such as laws and government bodies, that organize social, political, and economic interaction." },
  { word: "Media literacy", definition: "The ability to access, analyze, evaluate, and create media in a variety of forms, allowing individuals to understand the role of media in society." },
  { word: "Conceptualisation", definition: "The process of forming an idea or abstraction by identifying the essential characteristics of a phenomenon or object." },
  { word: "Persuasive techniques", definition: "Specific strategies or methods used in communication to influence an audience's beliefs, attitudes, or behaviors." },
  { word: "Target audience", definition: "The specific group of people identified as the intended recipients of a message, advertisement, or product based on shared characteristics." },
  { word: "Point of view", definition: "The specific perspective, position, or vantage point from which a story is told or an argument is presented." },
  { word: "Empirical research", definition: "A way of gaining knowledge by means of direct or indirect observation and experience, rather than through theory or belief alone." },
  { word: "Vulnerability", definition: "The state of being exposed to the possibility of being attacked or harmed, either physically, emotionally, or socio-economically." },
  { word: "Counter-arguments", definition: "Reasons or evidence put forward to oppose or refute a specific idea, claim, or previous argument." },
  { word: "Skepticism", definition: "An attitude of doubt or a disposition toward suspended judgment, typically requiring evidence before accepting a claim as true." },
  { word: "Advertiser tactics", definition: "The specific creative and psychological maneuvers used by marketers to capture attention and motivate consumers to purchase a product." },
  { word: "Discerning consumers", definition: "Individuals who exhibit good judgment and critical thinking when selecting products, focusing on quality and value rather than superficial appeal." },
  { word: "Persuasive device", definition: "A specific linguistic or rhetorical tool, such as a metaphor or appeal to emotion, used to convince an audience of a particular point." },
  { word: "Critical analysis", definition: "The objective evaluation of an issue or text in order to form a judgment by examining its component parts and underlying assumptions." }
];
// -------------------- VOCAB QUIZ --------------------

const normalizeText = (value: string) =>
  value.toLowerCase().trim().replace(/\s+/g, " ");

const VocabQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const currentCard = flashcards[currentIndex];

  const progress = useMemo(() => {
    return `${currentIndex + 1}/${flashcards.length}`;
  }, [currentIndex]);

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    setUserInput("");
    setIsCorrect(null);
  };

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();

    const answer = normalizeText(userInput);
    const correctWord = normalizeText(currentCard.word);

    if (answer === correctWord) {
      setIsCorrect(true);
      setScore((prev) => prev + 1);

      setTimeout(() => {
        nextQuestion();
      }, 900);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Card className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-none bg-white shadow-xl">
      <div className="flex items-center justify-between bg-primary p-6 text-white">
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <BookOpen className="h-5 w-5" />
          Vocab Challenge
        </h3>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
            {progress}
          </span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
            Score: {score}
          </span>
        </div>
      </div>

      <CardContent className="p-8">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Meaning
          </span>

          <p className="mt-2 text-xl font-medium leading-relaxed text-slate-800">
            {currentCard.definition}
          </p>
        </div>

        <form onSubmit={checkAnswer} className="space-y-4">
          <div className="relative">
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type the correct word or phrase here..."
              className="h-14 rounded-xl border-2 text-lg"
            />

            {isCorrect === true && (
              <CheckCircle2 className="absolute right-4 top-4 h-6 w-6 text-green-500" />
            )}

            {isCorrect === false && (
              <XCircle className="absolute right-4 top-4 h-6 w-6 text-red-500" />
            )}
          </div>

          <AnimatePresence mode="wait">
            {isCorrect === false && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="rounded-xl bg-red-50 p-4 text-red-600"
              >
                <p className="font-medium">Incorrect.</p>
                <p className="mt-1 text-sm text-slate-700">
                  Correct answer:
                  <span className="ml-2 font-bold text-primary underline">
                    {currentCard.word}
                  </span>
                </p>
              </motion.div>
            )}

            {isCorrect === true && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="rounded-xl bg-green-50 p-4 text-green-600"
              >
                Correct answer.
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-3">
            <Button
              type="submit"
              className="h-12 w-1/2 bg-[#1B2A6B] text-lg font-bold text-white hover:bg-[#1B2A6B]/80"
            >
              Check
            </Button>

            <Button
              type="button"
              onClick={nextQuestion}
              variant="outline"
              className="h-12 w-1/2 text-lg font-bold"
            >
              Next Question
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

// -------------------- PODCAST CARD --------------------

const PodcastCard = ({ podcasts }: { podcasts: PodcastItem[] }) => {
  if (!podcasts.length) {
    return (
      <Card className="rounded-3xl border-none bg-slate-900 p-6 text-white shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <Mic2 className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-bold">Lesson Podcast</h3>
        </div>

        <p className="text-sm text-slate-400">
          Podcast links for this lesson have not been added yet.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {podcasts.map((podcast, index) => (
        <Card
          key={`${podcast.title}-${index}`}
          className="rounded-3xl border-none bg-slate-900 ring-0 p-6 text-white shadow-lg"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Headphones className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">{podcast.title}</h3>
              </div>

              {podcast.duration && (
                <p className="text-sm text-slate-400">{podcast.duration}</p>
              )}
            </div>

            <Button
              asChild
              variant="outline"
              className="border-primary text-primary"
            >
              <a href={podcast.url} target="_blank" rel="noreferrer">
                Open
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
    {/* <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
            <iframe
              src={getSpotifyEmbedUrl(podcast.url)}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={podcast.title}
            />
          </div> */}
        </Card>
      ))}
    </div>
  );
};

// -------------------- MAIN PAGE --------------------

export default function StudyModule() {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-16 md:px-8">
      <div className="container mx-auto">
        {/* HEADER */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            <GraduationCap className="h-4 w-4" />
            <span>STUDENT HUB</span>
          </div>

          <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Learning <span className="text-primary">Materials</span>
          </h1>

          <p className="mx-auto max-w-2xl text-slate-500">
            Access lesson videos, materials, podcast links, and test your
            understanding with the interactive vocabulary quiz.
          </p>
        </header>

        {/* LESSON SECTION */}
        <section className="mb-24">
          <Tabs defaultValue="1" className="flex w-full flex-col">
            <div className="mb-8 flex flex-col items-center">
              <TabsList className="flex h-auto gap-1 rounded-full border bg-white p-1.5 shadow-sm">
                {videoLessons.map((lesson) => (
                  <TabsTrigger
                    key={lesson.id}
                    value={lesson.id}
                    className="rounded-full px-6 py-2.5 text-sm font-bold text-slate-900 transition-all data-[state=active]:bg-primary data-[state=active]:text-black"
                  >
                    Lesson {lesson.id}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {videoLessons.map((lesson) => {
              const hasVideo = Boolean(lesson.videoUrl);
              const hasMaterials = lesson.materials && lesson.materials !== "#";

              return (
                <TabsContent key={lesson.id} value={lesson.id}>
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* VIDEO + MATERIALS */}
                    <div className="lg:col-span-2">
                      <Card className="overflow-hidden ring-0 rounded-3xl border-none shadow-2xl">
                        <div className="aspect-video w-full bg-slate-900">
                          {hasVideo ? (
                            <iframe
                              className="h-full w-full"
                              src={getYoutubeEmbedUrl(lesson.videoUrl)}
                              title={lesson.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-400">
                              Lesson video has not been added yet.
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-4 bg-white p-6 md:flex-row md:items-center md:justify-between">
                          <div>
                            <h2 className="text-2xl font-bold">{lesson.title}</h2>
                            <p className="text-slate-500">{lesson.description}</p>
                          </div>

                          {hasMaterials ? (
                            <Button
                              asChild
                              variant="outline"
                              className="rounded-full border-primary text-primary"
                            >
                              <a
                                href={lesson.materials}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FileText className="mr-2 h-4 w-4" />
                                Get Materials
                              </a>
                            </Button>
                          ) : (
                            <Button
                              disabled
                              variant="outline"
                              className="rounded-full"
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              Materials Pending
                            </Button>
                          )}
                        </div>
                      </Card>
                    </div>

                    {/* PODCASTS */}
                    <div>
                      <PodcastCard podcasts={lesson.podcasts} />
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </section>

        {/* QUIZ SECTION */}
        <section className="rounded-[3rem]  bg-slate-100/50 px-4 py-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-slate-900">
              Interactive Vocabulary Quiz
            </h2>

            <p className="text-slate-500">
              Read the definition first, then type the correct word or phrase.
            </p>
          </div>

          <VocabQuiz />
        </section>
      </div>
    </div>
  );
}