const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Slide {
    header: String
    title: String
    description: String
  }
`;

const slides = [
  {
    header: "People",
    description:
      "A partnership between online marketing genius, Kristoff Coates and creative powerhouse, Shawn Soole. With years in online marketing in the legal world, Kristoff brings a unique and strategic position to help the food and drinks industry combining with Shawn’s decades long obsession with creating and building brands here in Canada and overseas. Acclamation is the combination of a tech savvy approach and hospitalitycentric creative direction, making it a unique hospitality focused organization. You've worked hard to create a high-quality product that people will love. Now you need to spread the word about your brand so you can sell more of your products. That's where we come in. We work with you to develop a complete branding and marketing strategy that showcases your liquor to your target audience and increases your sales, enabling your distillery to grow. We connect you with consumers through customized branding, marketing, and website optimization solutions. Our team combines online marketing strategy expertise with superior hospitality marketing and liquor branding development to maximize your distillery’s success and provide opportunities for growth.",
  },
  {
    header: "Kristoff Coates",
    title: "Technical Director",
    description:
      "Kristoff has been working in online sales and marketing for over 17 years. He has vast experience in analyzing and creating marketing strategies to best fit the needs of each individual business client. Structural analysis, content organization and analytical tracking of visitors have led to high placement in SERPs and Zero click placement for brand building.",
  },
  {
    header: "Colin Parks",
    title: "Principal Designer / Owner",
    description:
      "From a very early age, it was clear Colin Parks was destined to be a graphic designer. His earliest commission was a series of drawings for his elementary school’s Christmas production programs, followed shortly by a logo project in middle school, posters for high school productions, and a welcome sign for his hometown; all this before any real training. Since then, Colin has spent half his life as apractising professional with experience as an in-house designer for studios and agencies, in publishing (he can legitimately state he’s designed covers and interiors of approximately one thousand books), and as a freelancer. For him, design is best when clean and clear execution is based on a strong concept, and he has a penchant for mid-20th century aesthetics—a time when authentic ideas reigned over templated Photoshop effects.",
  },
  {
    header: "Shawn Soole",
    title: "Creative Director",
    description:
      "Shawn has been working in the hospitality industry for over 20 years, he has years of experience helping brands in the food & beverage sphere as well as the drinks industry target and attain their goals through CPG design, product development and social media content creation, strategy and marketing.",
  },
];
