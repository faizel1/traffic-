import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { DataTable, Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AutoCompleteTable = (prop) => {
  console.log(prop.type);
  const tableData = [
    { date: "12-21-23", violation: "Speeding", amount: 500, settled: false },
    {
      date: "12-21-23",
      violation: "drunk",
      amount: 500,
      settled: true,
    },
    { date: "12-21-23", violation: "Speeding", amount: 500, settled: true },
    { date: "12-21-23", violation: "Speeding", amount: 500, settled: false },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredTableData, setFilteredTableData] = useState(tableData);
  const handleSearch = (query) => {
    const filteredData = tableData.filter((row) =>
      Object.values(row.name).some((cell) =>
        cell.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredTableData(filteredData);
    setSearchQuery(query);
  };

  const handleRemove = (row) => {
    const newData = tableData.filter((r) => r !== row);
    setTableData(newData);
    const filteredData = filteredTableData.filter((r) => r !== row);
    setFilteredTableData(filteredData);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <Text style={{ color: "black", textAlign: "center", margin: 20 }}>
        {prop.title}
      </Text>
      <ScrollView>
        <DataTable style={styles.tableContainer}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title style={{ flex: 2 }}>Date</DataTable.Title>
            <DataTable.Title style={{ flex: 2 }}>Violation</DataTable.Title>
            <DataTable.Title style={{ flex: 2 }}>Amount</DataTable.Title>
            <DataTable.Title style={{ flex: 1 }}>Status</DataTable.Title>
            {/* <DataTable.Title style={{ flex: 0.5 }} /> */}
          </DataTable.Header>
          {filteredTableData.map((row, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell style={{ flex: 2 }}>{row.date}</DataTable.Cell>
              <DataTable.Cell style={{ flex: 2 }}>
                {row.violation}
              </DataTable.Cell>
              <DataTable.Cell style={{ flex: 2 }}>{row.amount}</DataTable.Cell>
              <DataTable.Cell  >
                {row.settled ? (
                  <Text style={{ fontSize: 12, color: "green" }}>YES</Text>
                ) : (
                  <Text style={{ fontSize: 12, color: "red" }}>
                    NO
                  </Text>
                )}
              </DataTable.Cell>
              {/* <DataTable.Cell style={{ alignSelf: "center", flex: 0.5 }}>
                <Icon
                  name="minus-circle-outline"
                  size={20}
                  onPress={() => handleRemove(row)}
                  color="#ff0000"
                />
              </DataTable.Cell> */}
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default AutoCompleteTable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  tableContainer: {
    backgroundColor: "whitesmoke",
  },
  tableHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
