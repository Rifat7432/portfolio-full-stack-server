export type TUser = {
  name: string;
  email: string;
  password: string;
  image: string;
  image2: string;
  phone: string;
  resume: string;
};



// import React, { useState, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import {
//   Bold, Italic, Link, List, AlignLeft, AlignCenter, AlignRight, AlignJustify,
// } from '@lucide/react';

// const TextEditor = () => {
//   const { register, handleSubmit } = useForm();
//   const [htmlContent, setHtmlContent] = useState('');
//   const textAreaRef = useRef<HTMLDivElement | null>(null);

//   const applyStyle = (command: string, value: string | null = null) => {
//     document.execCommand(command, false, value);
//   };

//   const onSubmit = (data: any) => {
//     if (textAreaRef.current) {
//       setHtmlContent(textAreaRef.current.innerHTML);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="toolbar flex space-x-2 mb-4">
//           <button type="button" onClick={() => applyStyle('bold')}>
//             <Bold className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => applyStyle('italic')}>
//             <Italic className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => {
//             const url = prompt('Enter the link URL:', 'https://');
//             if (url) applyStyle('createLink', url);
//           }}>
//             <Link className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => applyStyle('insertUnorderedList')}>
//             <List className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => applyStyle('justifyLeft')}>
//             <AlignLeft className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => applyStyle('justifyCenter')}>
//             <AlignCenter className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => applyStyle('justifyRight')}>
//             <AlignRight className="w-6 h-6 text-gray-700" />
//           </button>
//           <button type="button" onClick={() => applyStyle('justifyFull')}>
//             <AlignJustify className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>
//         <div
//           ref={textAreaRef}
//           contentEditable
//           className="border p-4 mb-4 min-h-[200px]"
//         ></div>
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//           Submit
//         </button>
//       </form>
//       <div className="mt-4">
//         <h3 className="text-xl font-bold mb-2">HTML Output:</h3>
//         <pre className="border p-4 bg-gray-100">{htmlContent}</pre>
//       </div>
//     </div>
//   );
// };

// export default TextEditor;
