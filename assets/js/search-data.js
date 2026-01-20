// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "For the complete CV, refer to the PDF on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-image-to-ascii",
      
        title: "Image to ASCII",
      
      description: "A fun little project with demo",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/image-to-ASCII/";
        
      },
    },{id: "post-know-them-flowers",
      
        title: "Know Them Flowers",
      
      description: "a simple collection",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/know-them-flowers/";
        
      },
    },{id: "news-graduated-college-with-high-distinction",
          title: 'Graduated college with high distinction.',
          description: "",
          section: "News",},{id: "news-offered-a-fully-funded-phd-position-in-computer-science-at-gsu",
          title: 'Offered a fully funded PhD position in Computer Science at GSU.',
          description: "",
          section: "News",},{id: "news-began-work-as-a-research-intern-at-pci-tech-in-china",
          title: 'Began work as a research intern at PCI Tech in China.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6C%69%39%33@%67%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jieming-li-a475b4292", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/lijieming_work", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
