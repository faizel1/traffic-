import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DataTable, Card } from "react-native-paper";
import ScreenWrapper from "./ScreenWrapper";

type ItemsState = Array<{
  key: number;
  driving_licence: string;
  violation: string;
  date: string;
  amount: number;
}>;

const DataTableExample = () => {
  const [sortAscending, setSortAscending] = React.useState<boolean>(true);
  const [page, setPage] = React.useState<number>(0);
  const [items] = React.useState<ItemsState>([
    {
        key: 1,
        driving_licence: "Afjssj45",
        violation: "pass red light",
        date: "12/6/23",
        amount: 4544,
      },
      {
        key: 2,
        driving_licence: "Adgsg5",
        violation: "pass red light",
        date: "12/6/23",
        amount: 4544,
      },
      {
        key: 3,
        driving_licence: "AAsAdf",
        violation: "pass red light",
        date: "12/6/23",
        amount: 4544,
      },
      {
        key: 4,
        driving_licence: "ADgf43",
        violation: "pass red light",
        date: "12/6/23",
        amount: 4544,
      },
  ]);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4, 200]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );
  const sortedItems = items
    .slice()
    .sort((item1, item2) =>
      (sortAscending ? item1.date < item2.date : item2.date < item1.date)
        ? 1
        : -1
    );
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScreenWrapper contentContainerStyle={styles.content}>
      <Card style={{ backgroundColor: "white" }}>
        <DataTable >
          <DataTable.Header>
            <ScrollView horizontal>
              <DataTable.Title
                //   sortDirection={sortAscending ? 'ascending' : 'descending'}
                //   onPress={() => setSortAscending(!sortAscending)}
                style={{ marginRight: 50 }}
              >
                Driving Licesnce
              </DataTable.Title>
              <DataTable.Title style={{ marginRight: 100 }}>
                Violation
              </DataTable.Title>
              <DataTable.Title style={{ marginRight: 70 }}>
                Date
              </DataTable.Title>
              <DataTable.Title>Amount</DataTable.Title>
            </ScrollView>
          </DataTable.Header>

          {sortedItems.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell style={{ marginRight: 60, marginLeft:30 }}>{item.driving_licence}</DataTable.Cell>
              <DataTable.Cell style={{ marginRight: 60 }}>{item.violation}</DataTable.Cell>
              <DataTable.Cell style={{ marginRight: 60 }}>{item.date}</DataTable.Cell>
              <DataTable.Cell>{item.amount}</DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(sortedItems.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${sortedItems.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={itemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            selectPageDropdownLabel={"Rows per page"}
          />
        </DataTable>
      </Card>
    </ScreenWrapper>
  );
};

DataTableExample.title = "Data Table";

const styles = StyleSheet.create({
  content: {
    padding: 8,
    color: "red",
    backgroundColor: "white",
  },
  first: {
    flex: 1,
  },
});

export default DataTableExample;
