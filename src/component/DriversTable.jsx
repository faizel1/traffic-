import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable, IconButton, TextInput, List, Divider } from 'react-native-paper';

const DriversTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const initialData = [
    { licenceNumber: 'AB1234', name: 'John Doe', gender: 'Male', bloodType: 'A+' },
    { licenceNumber: 'CD5678', name: 'Jane Smith', gender: 'Female', bloodType: 'O-' },
    { licenceNumber: 'EF9012', name: 'Bob Johnson', gender: 'Male', bloodType: 'B+' },
    { licenceNumber: 'GH3456', name: 'Mary Jones', gender: 'Female', bloodType: 'AB-' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = initialData.filter(item =>
      !tableData.includes(item) && // exclude items already in the table
      (item.licenceNumber.toLowerCase().includes(text.toLowerCase()) )
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
                  title={item.licenceNumber}
                  description={`${item.name} - ${item.gender} - ${item.bloodType}`}
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
          <DataTable.Title>Licence Number</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Gender</DataTable.Title>
          <DataTable.Title>Blood Type</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>

        {tableData.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item.licenceNumber}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.gender}</DataTable.Cell>
            <DataTable.Cell>{item.bloodType}</DataTable.Cell>
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

export default DriversTable;

