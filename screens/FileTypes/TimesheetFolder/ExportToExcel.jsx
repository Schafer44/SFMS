import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import XLSX from "xlsx";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function ExportDataToExcel(props) {
  // Created Sample data
  const DoBoth = async () => {
    var wscols = [
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 50 },
      { wpx: 75 },
      { wpx: 100 },
    ];
    var wsrows = [{ hpx: 16 }, { hpx: 16 }, { hpx: 16 }, { hpx: 16 }];
    let tempData = [props.Header];
    let tempDataThree = [];
    tempDataThree.Comment = props.Comment;
    var ws = XLSX.utils.json_to_sheet(tempData);
    var wb = XLSX.utils.book_new();
    XLSX.utils.sheet_add_json(ws, [], { origin: -1 });
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Name",
          "Occ",
          "Hrs.",
          "P/U",
          "Rig",
          "P/D",
          "Equip No.",
          "Equip Description",
        ],
      ],
      { origin: -1 }
    );
    let tmp = 3;
    Object.keys(props.Lines)
      .sort()
      .map((Key, Line) => {
        tmp++;
        if (Line !== undefined) {
          let tempLine = [];
          // Name
          if (props.Lines[Key][0] !== undefined) {
            tempLine.push(props.Lines[Key][0]);
          } else {
            tempLine.push("");
          }
          // Occ
          if (props.Lines[Key][1] !== undefined) {
            tempLine.push(props.Lines[Key][1]);
          } else {
            tempLine.push("");
          }
          //Hrs.
          if (props.Lines[Key][2] !== undefined) {
            tempLine.push(props.Lines[Key][2]);
          } else {
            tempLine.push("");
          }
          //P/U
          if (props.Lines[Key][3] !== undefined) {
            tempLine.push(props.Lines[Key][3]);
          } else {
            tempLine.push("");
          }
          //Rig
          if (props.Lines[Key][4] !== undefined) {
            tempLine.push(props.Lines[Key][4]);
          } else {
            tempLine.push("");
          }
          //P/D
          if (props.Lines[Key][5] !== undefined) {
            tempLine.push(props.Lines[Key][6]);
          } else {
            tempLine.push("");
          }
          //Equip No.
          if (props.Lines[Key][6] !== undefined) {
            tempLine.push(props.Lines[Key][6]);
          } else {
            tempLine.push("");
          }
          //Equip Description
          if (props.Lines[Key][7] !== undefined) {
            tempLine.push(props.Lines[Key][7]);
          } else {
            tempLine.push("");
          }
          XLSX.utils.sheet_add_aoa(ws, [tempLine], { origin: -1 });
        }
      });
    XLSX.utils.sheet_add_json(ws, [], { origin: -1 });
    XLSX.utils.sheet_add_json(ws, [tempDataThree], { origin: -1 });
    ws["!cols"] = wscols;
    ws["!rows"] = wsrows;
    XLSX.utils.book_append_sheet(wb, ws, "Cities");

    const wbout = XLSX.write(wb, {
      type: "base64",
      bookType: "xlsx",
    });
    const uri = FileSystem.cacheDirectory + "cities.xlsx";
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
      >
        <Text style={styles.loginText}>Export to Excel</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  temp: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "98%",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
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
  },
  SubBtn: {
    width: "100%",
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
  },
});
