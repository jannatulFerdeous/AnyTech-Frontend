

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer

// import { icons } from '../../../shared/libs/Icons';
// import { footerData } from './config/constants';

// const Footer = () => {
//   const { about, quickLinks, contact } = footerData;

//   return (
//     <footer className="bg-gray-800 text-white">
//       {/* Top Section */}
//       <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {/* About Section */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-orange-500">
//             {about.title}
//           </h2>
//           <p className="text-sm text-gray-300">{about.description}</p>
//         </div>

//         {/* Quick Links Section */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-orange-500">
//             {quickLinks.title}
//           </h2>
//           <ul className="space-y-2">
//             {quickLinks.links.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.url}
//                   className="text-sm text-gray-300 hover:text-orange-400"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info Section */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-orange-500">
//             {contact.title}
//           </h2>
//           <ul className="space-y-2 text-sm text-gray-300">
//             {contact.details.map((detail, index) => (
//               <li key={index}>
//                 <span className="font-medium">{detail.type}:</span>{' '}
//                 {detail.value}
//               </li>
//             ))}
//           </ul>

//           {/* Social Media Icons */}
//           <div className="mt-4 flex space-x-4">
//             {contact.social.map((item: any, index) => (
//               <a
//                 key={index}
//                 href={item.url}
//                 className="text-solidWhite hover:text-orange-400 hover:rounded-full hover:bg-gray-700 hover:p-2 transition-all"
//               >
//                 {icons[item.icon]}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Email Subscription Section */}
//         <div className="space-y-4">
//           <h2 className="text-lg font-semibold text-orange-500">
//             Stay Connected
//           </h2>
//           <p className="text-sm text-gray-300">
//             Subscribe to our newsletter to receive updates and offers.
//           </p>
//           <form className="flex flex-col space-y-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 text-sm text-gray-700 bg-gray-200 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <button
//               type="submit"
//               className="py-2 px-6 bg-orange-500 text-solidWhite text-sm rounded-lg hover:bg-orange-600 focus:outline-none"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-gray-900 py-4 mt-10 ">
//         <div className="container mx-auto flex justify-between items-center text-center px-4 ">
//           <div>
//             <span> Maintained By </span>
//             <a
//               href="https://necgroupbd.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-orange-500 text-sm hover:text-orange-500 hover:underline"
//             >
//               NEC GROUP
//             </a>
//           </div>
//           <div className="text-sm text-gray-400">
//             Copyright © 2018 NEC GROUP, All Rights Reserved.
//           </div>
//           <div>
//             <span>👩‍💻 Developed By </span>
//             <a
//               href="https://tasktechnology.net/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-orange-500 text-sm hover:text-orange-500 hover:underline"
//             >
//               Task Technology
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
