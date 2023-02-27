

// import React, { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { DataTable, IconButton, TextInput, List, Divider } from 'react-native-paper';

// const initialData = [
//   { plateNumber: 'AB1234', motorNumber: '1234', model: 'Sedan', owner: 'John Doe' },
//   { plateNumber: 'CD5678', motorNumber: '5678', model: 'SUV', owner: 'Jane Smith' },
//   { plateNumber: 'EF9012', motorNumber: '9012', model: 'Hatchback', owner: 'Bob Johnson' },
//   { plateNumber: 'GH3456', motorNumber: '3456', model: 'Truck', owner: 'Mary Jones' },
// ];

// const VehiclesTable = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [tableData, setTableData] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     const filtered = initialData.filter(item =>
//       item.plateNumber.toLowerCase().includes(text.toLowerCase()) ||
//       item.motorNumber.toLowerCase().includes(text.toLowerCase()) ||
//       item.model.toLowerCase().includes(text.toLowerCase()) ||
//       item.owner.toLowerCase().includes(text.toLowerCase())
//     );
//     setSearchResults(filtered);
//   };

//   const handleAddData = (item) => {
//     setTableData([...tableData, item]);
//     setSearchResults([]);
//     setSearchQuery('');
//   };

//   const handleRemoveData = (index) => {
//     const newData = [...tableData];
//     newData.splice(index, 1);
//     setTableData(newData);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <TextInput
//           label="Search"
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>
//       {searchResults.length > 0 && (
//         <View style={styles.searchResults}>
//           <List.Section>
//             {searchResults.map((item, index) => (
//               <React.Fragment key={index}>
//                 <List.Item
//                   title={item.plateNumber}
//                   description={`${item.model} - ${item.owner}`}
//                   onPress={() => handleAddData(item)}
//                 />
//                 {index < searchResults.length - 1 && <Divider />}
//               </React.Fragment>
//             ))}
//           </List.Section>
//         </View>
//       )}
//       <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>Plate Number</DataTable.Title>
//           <DataTable.Title>Motor Number</DataTable.Title>
//           <DataTable.Title>Model</DataTable.Title>
//           <DataTable.Title>Owner</DataTable.Title>
//           <DataTable.Title>Action</DataTable.Title>
//         </DataTable.Header>

//         {tableData.map((item, index) => (
//           <DataTable.Row key={index}>
//             <DataTable.Cell>{item.plateNumber}</DataTable.Cell>
//             <DataTable.Cell>{item.motorNumber}</DataTable.Cell>
//             <DataTable.Cell>{item.model}</DataTable.Cell>
//             <DataTable.Cell>{item.owner}</DataTable.Cell>
//             <DataTable.Cell>
//               <IconButton
//                 icon="minus-circle"
//                 color="red"
//                 size={20}
//                 onPress={() => handleRemoveData(index)}
//               />
//             </DataTable.Cell>
//           </DataTable.Row>
//         ))}
//       </DataTable>
//     </View>
//   );
// };

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable, IconButton, TextInput, List, Divider } from 'react-native-paper';

const VehiclesTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const initialData = [
    { plateNumber: 'AB1234', motorNumber: '1234', model: 'Sedan', owner: 'John Doe' },
    { plateNumber: 'CD5678', motorNumber: '5678', model: 'SUV', owner: 'Jane Smith' },
    { plateNumber: 'EF9012', motorNumber: '9012', model: 'Hatchback', owner: 'Bob Johnson' },
    { plateNumber: 'GH3456', motorNumber: '3456', model: 'Truck', owner: 'Mary Jones' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = initialData.filter(item =>
      !tableData.includes(item) && // exclude items already in the table
      (item.plateNumber.toLowerCase().includes(text.toLowerCase()))
    );
    setSearchResults(filtered);
  };

  const handleAddData = (item) => {
    setTableData([...tableData, item]);
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleRemoveData = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          label="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {searchResults.length > 0 && (
        <View style={styles.searchResults}>
          <List.Section>
            {searchResults.map((item, index) => (
              <React.Fragment key={index}>
                <List.Item
                  title={item.plateNumber}
                  description={`${item.model} - ${item.owner}`}
                  onPress={() => handleAddData(item)}
                />
                {index < searchResults.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List.Section>
        </View>
      )}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Plate Number</DataTable.Title>
          <DataTable.Title>Motor Number</DataTable.Title>
          <DataTable.Title>Model</DataTable.Title>
          <DataTable.Title>Owner</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>

        {tableData.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.plateNumber}</DataTable.Cell>
            <DataTable.Cell>{item.motorNumber}</DataTable.Cell>
            <DataTable.Cell>{item.model}</DataTable.Cell>
            <DataTable.Cell>{item.owner}</DataTable.Cell>
            <DataTable.Cell>
              <IconButton
                icon="minus-circle"
                color="#f00"
                size={20}
                onPress={() => handleRemoveData(index)}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchResults: {
    marginBottom: 16,
  },
});

export default VehiclesTable;
