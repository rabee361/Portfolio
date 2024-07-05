

interface TechIcon {
  name: string;
}


interface TimelineElement {
  id: number;
  title: string;
  location: string;
  description: string;
  buttonText?: string; // Make this optional if not every element has it
  date: string;
  icon: string; // Assuming this is meant to be a string identifier for the tech icons
  tech: TechIcon[];
}



let timelineElements: TimelineElement[] = [
    {
      id: 1,
      title: "Danac E-Store and Employee Managment App",
      location: "(Freelancer)",
      description:
        "Built for a local food company with features like real-time chat, push notifications, complex invoice and order creation, order tracking/shipping and managing employees, wareshouses, and more, built with Django, DRF and many other libraries",
      buttonText: "view project",
      date: "September 2023 - March 2024",
      icon: "store",
      tech: [
        {'name' : 'django'},
        {'name': 'nginx'},
        {'name': 'python'},
        {'name': 'postgresql'},
        
      ]
    },
    {
      id: 2,
      title: "Al-Noor Haj App",
      location: "(Freelancer)",
      description:
        "A mobile application with a custom admin panel built for pilgrims to guide them in their Hajj journey to Mekkah, offering features like real-time chat, push notifications, custom admin panel and managing employees, tour guides and pilgrims in the process.",
      buttonText: "view project",
      date: "April 2024 - June 2024",
      icon: "mosque",
      tech: [
        {'name' : 'django'},
        {'name': 'python'},
        {'name': 'nginx'},
        {'name': 'redis'},
        {'name': 'html'},
        {'name': 'bootstrap'},
        {'name': 'postgresql'},
      ]
    },
    {
      id: 3,
      title: "Expense Tracker (Graduation Project)",
      location: "(Al-Baath University)",
      description:
        "Expense Tracker app built with Flutter and Django integrated with AI tools to help users visualize thier expenses, suggest ways to save money and monitor their account balance. ",
      buttonText: "view project",
      date: "August 2023 - July 2024",
      icon: "graduation",
      tech: [
        {'name' : 'django'},
        {'name': 'nginx'},
        {'name': 'python'},
        {'name': 'docker'},
        {'name': 'postgresql'},
      ]
    },

  ];
  
  export default timelineElements;