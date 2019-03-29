import { Lesson } from '../app/classes/lesson/lesson';

export const LESSONS: Lesson[] = [
  {
    id: 9,
    title: "Introduction to Linux",
    body: null,
    sources: [ "https://www.iep.utm.edu/hunhu/",
          "https://www.fossweb.com/what-is-foss",
          "https://www.kernel.org/linux.html",
          "https://www.ubuntu.com/about"
        ],
    parts: [
      { id: 10, title: "What is Software?", body: "Software lets us do things with our computer. Some examples of software you probably use often are your internet browser and your online video games.", parts: [] },
      { id: 11, title: "What is Free and Open Source Software?", body: "Free and Open Source Software (or FOSS) is software that has (you guessed it) two important traits. First, it's free! It can be used by anyone without having to pay any fees. Second, it's open source. This means that anybody can look at the code used to write the software and change the software in any way they want.", parts: []},
      { id: 12, title: "What is an Operating System?", body: " Think of your operating system as the manager of your computer. It tells it everything that you want it to do, from powering on, to opening up your internet browser, to running your favorite games. It's what communicates between you, your mouse and your screen. Some popular operating systems are Microsoft Windows, macOS, and of course, Linux.", parts: []},
      { id: 13, title: "What is Linux?", body: "Linux is the name of a family of operating systems. It's named after its creator, Linus Torvalds, who created the software that is at the heart of every linux based operating system. Since then, many people worked together to build up whole operating systems based on his software. Many different operating systems have been created and each of them have their own name. Some popular ones are called Ubuntu, Debian, and Linux Mint. Instead of calling them Linux operating systems, they're often called Linux distributions. Many distributions (like those above) are examples of free and open source software.", parts: [] },
      { id: 14, title: "What is Ubuntu?", body: "Like we said earlier, Ubuntu is a free and open source Linux distribution. It's one of the most popular distributions available because it's easy to use, especially for people new to Linux. <In this tutorial, we will be using Ubuntu to teach you about using a Linux distribution. Fun fact: Ubuntu is a word in the Zulu language that has several meanings related to humanity, compassion, and unity.", parts: []},
    ]
  },
  {
    id: 1,
    title: "How to Make Money",
    body: "I wish I knew how to make money",
    sources: null,
    parts: [
      { id: 2, title: "Have Money", body: "", parts: [] },
      { id: 3, title: "Invest Money", body: "", parts: []},
      { id: 4, title: "Profit", body: "", parts: []}
    ]
  },
  {
    id: 5,
    title: "How to Lose Money",
    body: "This is self explanitory, spending money is the easy part, making it is hard",
    sources: null,
    parts: [
      { id: 6, title: "Have Money", body: "", parts: [] },
      { id: 7, title: "Buy Big House", body: "", parts: []},
      { id: 8, title: "Declare Bankruptcy", body: "", parts: [] }
    ]
  },
];
