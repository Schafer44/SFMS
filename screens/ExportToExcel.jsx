import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import XLSX from "xlsx";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

const ExportDataToExcel = () => {
  // Created Sample data
  const DoBoth = async () => {
    var data = [
      {
        name: "John",
        city: "Seattle",
      },
      {
        name: "Mike",
        city: "Los Angeles",
      },
      {
        name: "Zach",
        city: "New York",
      },
    ];
    var ws = XLSX.utils.json_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Cities");
    const wbout = XLSX.write(wb, {
      type: "base64",
      bookType: "xlsx",
    });
    const uri = FileSystem.cacheDirectory + "cities.xlsx";
    console.log(`Writing to ${JSON.stringify(uri)} with text: ${wbout}`);
    await FileSystem.writeAsStringAsync(uri, wbout, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await Sharing.shareAsync(uri, {
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      dialogTitle: "MyWater data",
      UTI: "com.microsoft.excel.xlsx",
    });
  };

  return (
    <View style={styles.newJob} key={1}>
      <TouchableOpacity
        key={1}
        underlayColor="#fff"
        style={styles.SubBtn}
        onPress={() => DoBoth()}
        title="New Job"
      ></TouchableOpacity>
    </View>
  );
};

export default ExportDataToExcel;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.15,
  },
  Text: {
    color: "white",
  },
  textInputTest: {
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  newJob: {
    width: "95%",
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "green",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    flexDirection: "row",
  },
  temp: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "98%",
  },
  tempText: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "98%",
    marginLeft: "50%",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
  },
  SubBtn: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
