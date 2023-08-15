// // src/Page1.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Page1 = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-semibold mb-6">Welcome to Student Info System</h1>
//       <Link to="/chatbot">
//         <button className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded">
//           Enroll Now
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Page1;
// src/Page1.js

// src/Page1.js

import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Student Info System</h1>
      <Link to="/chatbot">
        <button className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded w-full">
          Enroll Now
        </button>
      </Link>
    </div>
  );
};

export default Page1;
