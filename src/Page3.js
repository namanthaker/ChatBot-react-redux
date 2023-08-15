// // src/Page3.js

// import React from 'react';
// import { useSelector } from 'react-redux';

// const Page3 = () => {
//   const { name, age } = useSelector((state) => state.user);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md text-center">
//         <h2 className="text-xl font-semibold mb-2">Enrollment Confirmation</h2>
//         <p className="text-lg">
//           Your name <span className="font-semibold">{name}</span> aged{' '}
//           <span className="font-semibold">{age}</span> has been added to the student system.
//         </p>
//         <p>You may now exit.</p>
//       </div>
//     </div>
//   );
// };

// export default Page3;
// src/Page3.js

import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const { name, age } = useSelector((state) => state.user);

  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">Enrollment Confirmation</h2>
        <p className="text-lg">
          Your name <span className="font-semibold">{name}</span> aged{' '}
          <span className="font-semibold">{age}</span> has been added to the student system.
        </p>
        <p>You may now exit.</p>
      </div>
    </div>
  );
};

export default Page3;
