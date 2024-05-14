export const contentTypes = ['Article', 'Gallery', 'Recipe', 'Review', 'InfoPage', 'Bundle'];

export const PDFJsonObject = [
    {
      "id": 1,
      "Title": "SELF - Fitness when 20s",
      "Description": "A comprehensive guide to understanding the basics of machine learning algorithms and techniques.",
      "Author": "John Smith",
      "Tags": ["fitness", "body exercise"],
      "Category": "Health",
      "PublicationDate": "2023-04-15",
      "Language": "English",
      "Size": "6.7MB",
      "fileName": "self-fitness-when-20s.pdf",
      "Comments": "This PDF provides a clear explanation of fundamental machine learning concepts.",
      "Summary": 'The "Beginner Pilates Workout Plan" is a comprehensive guide designed for individuals new to Pilates exercises.'
    },
    {
      "id": 2,
      "Title": "Financial Report Q1 2024",
      "Description": "An analysis of financial performance for the first quarter of 2024.",
      "Author": "Jane Doe",
      "Tags": ["Finance", "Business", "Reports"],
      "Category": "Financial Analysis",
      "PublicationDate": "2024-05-01",
      "Language": "English",
      "Size": "10.5MB",
      "fileName": "Financial_Report_Q1_2024.pdf",
      "Comments": "Please review the revenue projections carefully.",
      "Summary": 'The "Financial Report Q1 2024" offers a comprehensive analysis of the financial performance and key metrics of an organization during the first quarter of 2024. It provides insights into revenue generation, expenses, profitability, and overall financial health. The report includes detailed breakdowns of income statements, balance sheets, and cash flow statements, allowing stakeholders to assess the company\'s financial standing and make informed decisions. Additionally, it may feature commentary on market trends, industry dynamics, and strategic initiatives undertaken by the company. The "Financial Report Q1 2024" serves as a vital tool for investors, executives, and analysts to evaluate the organization\'s performance and outlook for the future.'
    },
    {
      "id": 3,
      "Title": "Presentation Slides: Marketing Strategies",
      "Description": "Slides from a recent presentation discussing marketing strategies for the upcoming year.",
      "Author": "Marketing Team",
      "Tags": ["Marketing", "Strategy", "Presentations"],
      "Category": "Marketing",
      "PublicationDate": "2024-03-10",
      "Language": "English",
      "Size": "14.5MB",
      "fileName": "Slied_Marketing_Strategies.pdf",
      "Comments": "These slides contain valuable insights into our marketing initiatives.",
      "Summary": '"Marketing Strategies" encompass a diverse range of tactics and techniques employed by businesses to promote their products or services and achieve their marketing objectives. This summary provides an overview of various marketing strategies commonly used in today\'s competitive landscape.Effective marketing strategies often involve a combination of these approaches tailored to the unique goals, target audience, industry, and budget of the organization. Continuous monitoring, analysis, and optimization are essential for adapting to market dynamics and maximizing the impact of marketing efforts.'
    }
  ];

  export function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }