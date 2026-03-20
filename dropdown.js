 import React from 'react';

 function DropdownComponent() {
   // Declare the variable containing array data
   const data = ['C', 'C++', 'Java', 'AdvJava', 'WPT'];

   return (
     <div style={{ padding: '20px' }}>
       <h3>Select a Language</h3>
       <select defaultValue={data[0]}>
         {data.map((item) => (
           // Map data to options, using the item as the unique key
           <option key={item} value={item}>
             {item}
           </option>
         ))}
      </select>
    </div>
   );
 }

 export default DropdownComponent;

