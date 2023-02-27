// import React from "react";
// import { StyleSheet } from "react-native";
// import { DataTable, Text } from "react-native-paper";

// const TableExample = () => {
//   const tableData = [
//     { date: "12-21-23", violation: "no Belt", amount: 500, settled: false },
//     { date: "12-21-23", violation: "drunk driving", amount: 500, settled: true },
//     { date: "12-21-23", violation: "no Belt", amount: 500, settled: true },
//     { date: "12-21-23", violation: "no Belt", amount: 500, settled: false },
//   ];

//   return (
//     <DataTable style={styles.container}>
//       <DataTable.Header style={styles.tableHeader}>
//         <DataTable.Title >Date</DataTable.Title>
//         <DataTable.Title >Violation</DataTable.Title>
//         <DataTable.Title >Amount</DataTable.Title>
//         <DataTable.Title >Status</DataTable.Title>
//       </DataTable.Header>
//       {tableData.map((data, k) => {
//         return (
//           <DataTable.Row key={k}>
//             <DataTable.Cell >
//               <Text style={{ fontSize: 12 }}>{data.date}</Text>
//             </DataTable.Cell>
//             <DataTable.Cell  >
//               <Text style={{ fontSize: 12 }}>{data.violation}</Text>
//             </DataTable.Cell>
//             <DataTable.Cell >
//               <Text style={{ fontSize: 12 }}>{data.amount}</Text>
//             </DataTable.Cell>
//             <DataTable.Cell >
//               {data.settled ? (
//                 <Text style={{ fontSize: 12, color: "green" }}>settled</Text>
//               ) : (
//                 <Text style={{ fontSize: 12, color: "red" }}>not settled</Text>
//               )}
//             </DataTable.Cell>
//           </DataTable.Row>
//         );
//       })}
//     </DataTable>
//   );
// };

// export default TableExample;

// const styles = StyleSheet.create({
//   container: {
//     padding: 5,
//   },
//   tableHeader: {
//     backgroundColor: "rgba(0, 0, 0, 0.03)",
//   },
// });

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Searchbar, DataTable, List, Divider } from "react-native-paper";

const driverData = [
  {
    name: "John Smith",
    licenseNumber: "ABC123",
    violations: [
      { date: "2022-01-01", violation: "Speeding", amount: 100, settled: true },
      {
        date: "2022-02-01",
        violation: "No Belt",
        amount: 50,
        settled: false,
      },
    ],
  },
  {
    name: "Jane Doe",
    licenseNumber: "DEF456",
    violations: [
      {
        date: "2022-03-01",
        violation: "Parking",
        amount: 200,
        settled: true,
      },
    ],
  },
];

const TableExample = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchDropdownData, setSearchDropdownData] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setShowDropdown(true);
      const filteredDrivers = driverData.filter((driver) => {
        const driverName = driver.name.toLowerCase();
        const driverLicenseNumber = driver.licenseNumber.toLowerCase();
        const violations = driver.violations.map((violation) =>
          violation.violation.toLowerCase()
        );
        return (
          driverName.includes(query.toLowerCase()) ||
          driverLicenseNumber.includes(query.toLowerCase()) ||
          violations.includes(query.toLowerCase())
        );
      });
      setSearchDropdownData(filteredDrivers);
    } else {
      setShowDropdown(false);
      setSearchDropdownData([]);
      setFilteredRecords([]);
    }
  };

  const handleSelectDriver = (driver) => {
    setSearchQuery(driver.name);
    setShowDropdown(false);
    setSearchDropdownData([]);
    setFilteredRecords([driver]);
  };

  const renderDriverItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectDriver(item)}>
      <List.Item
        title={item.name}
        description={item.licenseNumber}
        style={{ paddingVertical: 8 }}
      />
      <Divider />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search driver or violation"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {showDropdown && (
        <View
          style={{ backgroundColor: "#fff", borderRadius: 4, elevation: 4 }}
        >
          <FlatList
            data={searchDropdownData}
            renderItem={renderDriverItem}
            keyExtractor={(item) => item.licenseNumber}
          />
        </View>
      )}
      {filteredRecords.length > 0 && (
        <>
          <Text style={{ fontWeight: "bold", margin: 16 }}>
            {filteredRecords[0].name} - {filteredRecords[0].licenseNumber}
          </Text>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Violation</DataTable.Title>
              <DataTable.Title>Amount</DataTable.Title>
              <DataTable.Title>Settled</DataTable.Title>
            </DataTable.Header>
            {filteredRecords[0].violations.map((violation, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>
                  <Text style={{ fontSize: 12 }}>{violation.date}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={{ fontSize: 12 }}>{violation.violation}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={{ fontSize: 12 }}>{violation.amount}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  {violation.settled ? (
                    <Text style={{ fontSize: 14, color: "green" }}>Yes</Text>
                  ) : (
                    <Text style={{ fontSize: 14, color: "red" }}>No</Text>
                  )}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </>
      )}
    </View>
  );
};

export default TableExample;
